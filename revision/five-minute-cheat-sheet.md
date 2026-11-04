# Digital Systems — five-minute Week 5 cheat sheet

**Quiz:** 60 minutes, 18 questions, 50 marks. Coding/Boolean logic: 9 questions/25 marks; ARM through Week 4: 9/25. Budget roughly one minute per mark after reading. Formats: MCQ, short answers, drag-and-drop completion.

## 1. Number conversions

- **Unsigned n bits:** 0…2ⁿ−1. **Two’s complement n bits:** −2ⁿ⁻¹…2ⁿ⁻¹−1. Eight-bit ranges: 0…255 / −128…127.
- **Binary weights:** …256,128,64,32,16,8,4,2,1 **.** ½,¼,⅛,¹⁄₁₆,¹⁄₃₂. Add weights wherever the bit is 1.
- **Decimal → binary:** repeated division by 2; read remainders backwards. Fractional part: repeatedly multiply by 2; read integer parts forwards.
- **Hex ↔ binary:** one hex digit = four bits. Group from the binary point outward; pad integer bits on the **left**, fractional bits on the **right**.
- Hex A B C D E F = decimal 10 11 12 13 14 15 = binary 1010 1011 1100 1101 1110 1111.
- **Negative → two’s complement:** fix the width, invert positive magnitude’s bits, add 1. Equivalently encode −m as 2ⁿ−m. **Decode:** if top bit=1, unsigned value−2ⁿ; otherwise unchanged. Example: 8-bit EC = 236−256 = −20. Hex alone does not specify signedness or width.
- **Sign extension:** repeat the sign bit when widening a signed value. Zero extension inserts zeros. **Carry ≠ signed overflow:** adding same-sign values and obtaining the opposite sign indicates signed overflow; discard bits beyond the fixed width.
- **Sign-and-magnitude:** sign bit + magnitude; two zeros. **Excess/bias:** stored code = value+bias; decode by subtracting bias.

## 2. IEEE 754 binary32

**32 bits = sign s (1) | stored exponent E (8) | fraction f (23).** For normal values:

**value = (−1)ˢ × (1.f)₂ × 2^(E−127).** Sign 0 positive, 1 negative.

**Encode:** convert magnitude to binary → normalise to 1.f×2ᵉ → E=e+127 → omit the leading 1 → right-pad f to 23 bits → concatenate all 32 bits → eight hex digits.

Example: −6.5 = −110.1₂ = −1.101₂×2² → `1 | 10000001 | 10100000000000000000000` → **C0D00000**.

**Decode:** hex → 32 bits → split 1/8/23 → exponent E−127 → restore implicit 1 → scale and apply sign. Negative exponents move the binary point left.

Special cases: E=0/f=0 → signed zero; E=0/f≠0 → subnormal (no implicit 1); E=255/f=0 → infinity; E=255/f≠0 → NaN. Nonterminating binary fractions require rounding.

## 3. Boolean logic and Karnaugh maps

**Notation:** A′ = NOT A; AB = AND; A+B = OR; XOR=1 when inputs differ. NAND=NOT AND; NOR=NOT OR; both are universal.

**Recognise:** A+0=A; A1=A; A+1=1; A0=0; A+A=A; AA=A; A+A′=1; AA′=0; (A′)′=A; A+AB=A; A(A+B)=A. Distributivity: A(B+C)=AB+AC; A+BC=(A+B)(A+C).

**De Morgan:** (AB)′=A′+B′; (A+B)′=A′B′ — complement operands **and swap AND/OR**.

**K-map recipe:** axes in Gray order **00,01,11,10**. Group 1s in rectangles of **1,2,4,8,…** cells. Use the largest useful groups; cover every 1; include no required 0. Opposite edges/corners wrap; overlaps allowed; diagonals are not adjacent. Keep only variables constant across a group: constant 1 → A; constant 0 → A′; changing variable disappears. OR the terms; remove redundant groups. A four-variable group of four retains two variables.

## 4. ARM: values, addresses and memory

**32-bit register; byte=8 bits, halfword=2 bytes, word=4 bytes. Destination first; # means immediate.**

| ARM pattern | Meaning |
| --- | --- |
| `mov r0, r1` | Copy r1 to r0 |
| `add/sub r0, r1, r2` | r0=r1+r2 / r1−r2 |
| `and/orr/eor` | C bitwise `&`, `\|`, `^` |
| `lsl/lsr/asr r0, r1, #k` | Left / zero-filling right / sign-filling right shift |
| `ldr r0, =arr` | Obtain arr’s **address** |
| `ldr r0, [r1]` | Load **word contents** at address r1 |
| `str r0, [r1, #4]` | Store r0 at r1+4; preserve r0 and r1 |
| `ldrb/ldrh` | Load byte/halfword, zero-extend |
| `ldrsb/ldrsh` | Load byte/halfword, sign-extend |
| `strb/strh` | Store only low byte/halfword |

Offsets are **bytes**: four-byte array a[i] → base+4i → `[r0, r1, lsl #2]`; byte array → base+i → `[r0, r1]`. These offset forms preserve base/index. `ldrb` of 80 → 00000080; `ldrsb` of 80 → FFFFFF80.

**Endian:** store 12345678 at ascending addresses A…A+3: **little = 78 56 34 12; big = 12 34 56 78.** Reverse byte placement, never bits within bytes. A byte store changes one byte only.

Directives: `.word`=4 bytes, `.byte`=1; `.ascii` has no terminator, `.asciz` adds one zero byte. `.text` selects code; `.data` initialised writable data; `.bss` zero-initialised storage. Labels name addresses. r13=sp, r14=lr, r15=pc. `movw` sets low 16 bits and clears high 16; `movt` sets high 16 and preserves low 16.

## 5. Branches and tracing

**`cmp a, b` sets flags for a−b; preserves operands.** N=result sign bit; Z=result zero; C=carry (subtraction: no borrow); V=signed overflow. `adds/subs` update flags; ordinary non-S arithmetic and mov preserve them.

| After `cmp a, b` | Signed | Unsigned |
| --- | --- | --- |
| a<b | `blt` (N≠V) | `blo/bcc` (C=0) |
| a≤b | `ble` (Z=1 or N≠V) | `bls` (C=0 or Z=1) |
| a>b | `bgt` (Z=0 and N=V) | `bhi` (C=1 and Z=0) |
| a≥b | `bge` (N=V) | `bhs/bcs` (C=1) |

`beq`: Z=1; `bne`: Z=0; `b label`: unconditional. **Signed less-than is not simply N=1.**

Trace only executed paths; later instructions use updated registers/memory. An if–else needs a branch past the else body. A label does not stop execution. Loops: initialisation → test → body → update → repeat; distinguish `<`/`≤`, pre/post tests and the final failed test. Check whether the most recent flag-setting instruction is cmp or subs. Repeated subtraction gives quotient=count, remainder=leftover (nonnegative dividend, positive divisor).

## 6. Fast MCQ facts and final format check

Von Neumann: shared instruction/data memory; Harvard: separate; modified Harvard: separate caches, unified main memory. Unicode code point identifies a character; UTF determines encoding. ALU performs arithmetic/logic. Heap=dynamic allocation; stack=call/local storage where required.

**Before submitting:** exact bit/digit width; prefix only if requested; otherwise no leading zeros/base labels unless width requires them. `0x` + 8 hex digits = 32 bits. Boolean: alphabetical variables per term, no spaces/AND dots, prime notation; term order may vary. **ARM lowercase**, destination first, correct operand order, `#` and brackets.

**Scope reminder:** recognise Boolean laws and simplify with K-maps; no algebra-law simplification derivations, circuit drawing or complex ARM programs from scratch.

Source: supplied module guidelines and Weeks 1–4 lecture/revision notes. This is unofficial preparation material.
