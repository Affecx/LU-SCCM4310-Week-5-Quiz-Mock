window.BUNDLED_QUIZZES = [
  {
    "id": "mock-1",
    "title": "Mock 1",
    "description": "Core conversions, Boolean logic and ARM fundamentals.",
    "questions": [
      {
        "title": "Architecture and coding",
        "prompt": "Select one answer in each part.",
        "parts": [
          {
            "label": "In a Von Neumann architecture, instructions and data…",
            "answer": "share main memory",
            "marks": 1,
            "options": [
              "must use separate main memories",
              "are stored only in registers",
              "share main memory"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "A Unicode code point identifies…",
            "answer": "a character independently of its UTF encoding",
            "marks": 1,
            "options": [
              "an ARM instruction",
              "a character independently of its UTF encoding",
              "exactly one byte in every UTF encoding"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "Von Neumann uses shared instruction/data memory. A code point is an abstract character identifier; an encoding determines how it is stored."
      },
      {
        "title": "Unsigned conversions",
        "prompt": "Use unsigned values. Follow each answer format exactly.",
        "parts": [
          {
            "label": "Convert decimal 173 to exactly 8 binary digits.",
            "answer": "10101101",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Convert binary 11010110 to hexadecimal, without a prefix or leading zeros.",
            "answer": "D6",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "Convert hexadecimal 3B to decimal.",
            "answer": "59",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "173 = 128+32+8+4+1. Group 1101 0110 to obtain D6. 3B = 3×16+11 = 59."
      },
      {
        "title": "Two’s complement",
        "prompt": "All bit patterns in this question are 8-bit two’s complement.",
        "parts": [
          {
            "label": "Encode decimal −37 as exactly 8 binary digits.",
            "answer": "11011011",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Encode decimal −37 as exactly 2 hex digits, with no prefix.",
            "answer": "DB",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "Decode 11101010 to a signed decimal integer.",
            "answer": "-22",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "37 = 00100101; invert and add 1 to get 11011011 = DB. For 11101010, unsigned 234 − 256 = −22."
      },
      {
        "title": "Unsigned binary fractions",
        "prompt": "Convert decimal 6.6875 to unsigned binary. Use no prefix, no leading zeros and exactly 4 digits after the binary point.",
        "parts": [
          {
            "label": "Binary value",
            "answer": "110.1011",
            "marks": 2,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "6 = 110₂ and 0.6875 = 1/2+1/8+1/16 = .1011₂."
      },
      {
        "title": "Encode IEEE 754",
        "prompt": "Encode decimal −13.25 as IEEE 754 single precision (binary32).",
        "parts": [
          {
            "label": "Sign bit",
            "answer": "1",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Stored exponent: exactly 8 binary digits",
            "answer": "10000010",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Complete representation: 0x followed by exactly 8 hex digits",
            "answer": "0xC1540000",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          }
        ],
        "why": "13.25 = 1101.01₂ = 1.10101₂ × 2³. Sign 1, exponent 3+127=130 (10000010), fraction 10101000000000000000000. Fields combine to C1540000."
      },
      {
        "title": "Decode IEEE 754",
        "prompt": "Decode the normal binary32 pattern 0x40B80000.",
        "parts": [
          {
            "label": "Sign bit",
            "answer": "0",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Actual (unbiased) exponent, in decimal",
            "answer": "2",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Represented value, in decimal",
            "answer": "5.75",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "The fields are 0 | 10000001 | 01110000000000000000000. Exponent 129−127=2; 1.0111₂ × 2² = 101.11₂ = 5.75."
      },
      {
        "title": "Boolean laws",
        "prompt": "Choose the valid identity in each part. A prime (') means NOT; + means OR; juxtaposition means AND.",
        "parts": [
          {
            "label": "De Morgan’s law",
            "answer": "(AB)'=A'+B'",
            "marks": 1,
            "options": [
              "(AB)'=A+B",
              "(AB)'=A'B'",
              "(AB)'=A'+B'"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "Absorption",
            "answer": "A+AB=A",
            "marks": 1,
            "options": [
              "A+AB=A",
              "A+AB=B",
              "A+AB=AB"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "Complement",
            "answer": "A+A'=1",
            "marks": 1,
            "options": [
              "A+A'=0",
              "AA'=1",
              "A+A'=1"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "De Morgan exchanges AND/OR and complements the operands. Absorption: A+AB=A. A OR NOT A is always 1."
      },
      {
        "title": "Three-variable Karnaugh map",
        "prompt": "Simplify the map to a minimal sum of products. Columns BC are in Gray-code order. Group 1s, including wrapping groups.\n<table><caption>Output F</caption><tr><th>A \\ BC</th><th>00</th><th>01</th><th>11</th><th>10</th></tr><tr><th>0</th><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><th>1</th><td>1</td><td>1</td><td>1</td><td>1</td></tr></table>\nUse ASCII primes, no spaces, no AND dots, and alphabetical variable order within terms.",
        "parts": [
          {
            "label": "Minimal expression",
            "answer": "A+C'",
            "marks": 3,
            "options": null,
            "kind": "boolean",
            "accept": []
          }
        ],
        "why": "The entire A=1 row gives A. The first and last columns wrap to make a four-cell group with C=0, giving C'. Thus F=A+C'."
      },
      {
        "title": "Four-variable Karnaugh map",
        "prompt": "Simplify to a minimal sum of products. Both axes use Gray-code order.\n<table><caption>Output F</caption><tr><th>AB \\ CD</th><th>00</th><th>01</th><th>11</th><th>10</th></tr><tr><th>00</th><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><th>10</th><td>1</td><td>1</td><td>1</td><td>1</td></tr></table>\nUse ASCII primes, no spaces or AND dots, and alphabetical variable order within terms.",
        "parts": [
          {
            "label": "Minimal expression",
            "answer": "AC+B'C'",
            "marks": 3,
            "options": null,
            "kind": "boolean",
            "accept": []
          }
        ],
        "why": "Rows 00 and 10 wrap: their columns 00 and 01 form a four-cell group B'C'. Rows 11 and 10 in columns 11 and 10 form a four-cell group AC. Together AC+B'C' covers all 1s."
      },
      {
        "title": "ARM fundamentals",
        "prompt": "Assume ARMv7 A32 with 32-bit registers throughout this section.",
        "parts": [
          {
            "label": "Which instruction updates condition flags without storing its subtraction result?",
            "answer": "cmp r1, r2",
            "marks": 1,
            "options": [
              "mov r1, r2",
              "cmp r1, r2",
              "str r1, [r2]"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "What does ldr r0, =arr obtain?",
            "answer": "the address named arr",
            "marks": 1,
            "options": [
              "the first byte stored at arr",
              "the number of array elements",
              "the address named arr"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "cmp sets flags as if subtracting its second operand from its first. ldr r0, =arr is a pseudo-instruction that obtains an address, whereas ldr r0, [r1] loads memory contents."
      },
      {
        "title": "Byte ordering",
        "prompt": "A byte-addressable memory stores the THREE-BYTE value 0xA1B2C3 starting at 0x0020. Fill each blank from the byte options. Drag a chip onto a select box or choose with the keyboard.",
        "parts": [
          {
            "label": "Little endian: byte at 0x0020",
            "answer": "0xC3",
            "marks": 1,
            "options": [
              "0xA1",
              "0xB2",
              "0xC3",
              "0x3C"
            ],
            "kind": "drop",
            "accept": []
          },
          {
            "label": "Little endian: byte at 0x0022",
            "answer": "0xA1",
            "marks": 1,
            "options": [
              "0xA1",
              "0xB2",
              "0xC3",
              "0x3C"
            ],
            "kind": "drop",
            "accept": []
          },
          {
            "label": "Big endian: byte at 0x0020",
            "answer": "0xA1",
            "marks": 1,
            "options": [
              "0xA1",
              "0xB2",
              "0xC3",
              "0x3C"
            ],
            "kind": "drop",
            "accept": []
          }
        ],
        "why": "Little endian stores C3 B2 A1 at ascending addresses 0020–0022. Big endian stores A1 B2 C3. Bits inside each byte keep their order. Options may be reused across the independent cases."
      },
      {
        "title": "Bitwise instruction trace",
        "prompt": "<pre>mov r0, #0x3c\nmov r1, #0xa5\neor r2, r0, r1\nand r3, r0, r1\norr r4, r0, r1</pre>Enter each result as 0x followed by exactly 8 hexadecimal digits.",
        "parts": [
          {
            "label": "r2",
            "answer": "0x00000099",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "r3",
            "answer": "0x00000024",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "r4",
            "answer": "0x000000BD",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          }
        ],
        "why": "3C = 00111100 and A5 = 10100101. XOR gives 99, AND gives 24 and OR gives BD. The upper 24 bits remain zero."
      },
      {
        "title": "Single-line C to ARM",
        "prompt": "Variables are mapped to the registers with the same names. Write one lowercase ARM instruction per part, using explicit three-operand arithmetic.",
        "parts": [
          {
            "label": "r0 = r1 + 12;",
            "answer": "add r0, r1, #12",
            "marks": 1,
            "options": null,
            "kind": "asm",
            "accept": [
              "add r0, r1, #0xc"
            ]
          },
          {
            "label": "r4 = r2 - r3;",
            "answer": "sub r4, r2, r3",
            "marks": 1,
            "options": null,
            "kind": "asm",
            "accept": []
          },
          {
            "label": "r5 = r6 << 2; (unsigned r6)",
            "answer": "lsl r5, r6, #2",
            "marks": 1,
            "options": null,
            "kind": "asm",
            "accept": [
              "mov r5, r6, lsl #2"
            ]
          }
        ],
        "why": "ARM destination comes first. # marks an immediate constant. lsl shifts left; for unsigned values the stored result is the low 32 bits."
      },
      {
        "title": "Complete an if–else",
        "prompt": "Complete the assembly so it matches the signed C code. Each option may be used once; unused options are distractors.\n<pre>if (r2 &lt; r3)\n    r0 = r2 + r3;\nelse\n    r0 = r2 - r3;</pre>\n<pre>cmp r2, r3\nbge else_case\n[blank 1]\n[blank 2]\nelse_case:\n[blank 3]\nend_if:</pre>",
        "parts": [
          {
            "label": "Blank 1",
            "answer": "add r0, r2, r3",
            "marks": 1,
            "options": [
              "sub r0, r2, r3",
              "add r0, r2, r3",
              "b end_if",
              "b else_case",
              "sub r0, r3, r2"
            ],
            "kind": "drop",
            "accept": []
          },
          {
            "label": "Blank 2",
            "answer": "b end_if",
            "marks": 1,
            "options": [
              "sub r0, r2, r3",
              "add r0, r2, r3",
              "b end_if",
              "b else_case",
              "sub r0, r3, r2"
            ],
            "kind": "drop",
            "accept": []
          },
          {
            "label": "Blank 3",
            "answer": "sub r0, r2, r3",
            "marks": 1,
            "options": [
              "sub r0, r2, r3",
              "add r0, r2, r3",
              "b end_if",
              "b else_case",
              "sub r0, r3, r2"
            ],
            "kind": "drop",
            "accept": []
          }
        ],
        "why": "bge takes the false case when signed r2≥r3. The true case adds, then b end_if skips the else body. The else case subtracts r3 from r2."
      },
      {
        "title": "Trace and identify a program",
        "prompt": "Treat r1 and r2 as signed 32-bit integers. Execution ends at done.\n<pre>cmp r1, r2\nble select_r1\nmov r0, r2\nb done\nselect_r1:\nmov r0, r1\ndone:</pre>",
        "parts": [
          {
            "label": "r0 when r1=7 and r2=12 (decimal)",
            "answer": "7",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "r0 when r1=−3 and r2=2 (signed decimal)",
            "answer": "-3",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Purpose",
            "answer": "select the signed minimum",
            "marks": 1,
            "options": [
              "add the inputs",
              "calculate the absolute difference",
              "select the signed minimum",
              "select the signed maximum"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "ble selects r1 when r1≤r2; otherwise r2 is selected. It computes the signed minimum, including for negative inputs."
      },
      {
        "title": "Word and byte loads",
        "prompt": "Assume little endian; each .word is four bytes. Enter 0x followed by exactly 8 hex digits.\n<pre>.data\n.balign 4\narr: .word 0x10203040, 0x55667788, 0xAABBCCDD\n.text\nldr r0, =arr\nmov r1, #1\nldrb r2, [r0, r1, lsl #2]\nldr r3, [r0, #8]</pre>",
        "parts": [
          {
            "label": "r2",
            "answer": "0x00000088",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "r3",
            "answer": "0xAABBCCDD",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          }
        ],
        "why": "The scaled index is 1×4=4, selecting the second word. ldrb reads its lowest-address byte 88 and zero-extends it. Offset 8 selects the entire third word for ldr."
      },
      {
        "title": "Match C and assembly",
        "prompt": "Select the signed C block equivalent to this assembly. No overflow occurs.\n<pre>mov r0, #0\nmov r1, #1\nloop:\ncmp r1, #5\nbge done\nadd r0, r0, r1\nadd r1, r1, #1\nb loop\ndone:</pre>",
        "parts": [
          {
            "label": "Equivalent block",
            "answer": "r0=0; for(r1=1; r1<5; r1++) r0+=r1;",
            "marks": 2,
            "options": [
              "r0=0; for(r1=1; r1<5; r1++) r0+=r1;",
              "r0=0; for(r1=0; r1<5; r1++) r0++;",
              "r0=0; for(r1=1; r1<=5; r1++) r0+=r1;",
              "r0=1; while(r1<5) r0*=r1;"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "The comparison precedes the body, and bge exits at r1=5. The added values are 1,2,3,4; final r0=10 and r1=5."
      },
      {
        "title": "Complete repeated-subtraction division",
        "prompt": "For nonnegative inputs here, this program produces quotient r0 and remainder r1. Execution ends at exit. Use one lowercase instruction for the blank, then give decimal results.\n<pre>mov r2, #53\nmov r3, #7\nmov r0, #0\nmov r1, #0\n[missing instruction]\nwhile_test:\ncmp r1, r3\nblt exit\nsub r1, r1, r3\nadd r0, r0, #1\nb while_test\nexit:</pre>",
        "parts": [
          {
            "label": "Missing instruction",
            "answer": "mov r1, r2",
            "marks": 2,
            "options": null,
            "kind": "asm",
            "accept": []
          },
          {
            "label": "Final quotient r0",
            "answer": "7",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Final remainder r1",
            "answer": "4",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "Initialise the remainder candidate to the dividend using mov r1, r2. Seven subtractions remove 49 from 53, leaving 4. An eighth subtraction is prevented by blt. Thus 53=7×7+4."
      }
    ]
  },
  {
    "id": "mock-2",
    "title": "Mock 2",
    "description": "Fresh K-maps, shifts, signed byte loads and array summation.",
    "questions": [
      {
        "title": "Gates and signed ranges",
        "prompt": "Select one answer in each part.",
        "parts": [
          {
            "label": "Which gate outputs 0 only when both inputs are 1?",
            "answer": "NAND",
            "marks": 1,
            "options": [
              "AND",
              "NAND",
              "XOR",
              "OR"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "What is the range of a 6-bit two’s complement integer?",
            "answer": "−32 to 31",
            "marks": 1,
            "options": [
              "0 to 63",
              "−31 to 31",
              "−64 to 63",
              "−32 to 31"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "NAND is NOT(AND). Six-bit two’s complement has range −2⁵ through 2⁵−1, hence −32 to 31."
      },
      {
        "title": "Unsigned conversions",
        "prompt": "Follow the requested widths and prefixes.",
        "parts": [
          {
            "label": "Convert decimal 219 to exactly 8 binary digits.",
            "answer": "11011011",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Convert binary 101111001 to hexadecimal, without a prefix or leading zeros.",
            "answer": "179",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "Convert hexadecimal 2E7 to decimal.",
            "answer": "743",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "219=128+64+16+8+2+1. Group the second value as 0001 0111 1001 to get 179. 2E7=2×256+14×16+7=743."
      },
      {
        "title": "Signed encodings",
        "prompt": "Use 8-bit two’s complement throughout.",
        "parts": [
          {
            "label": "Encode decimal −73 as exactly 8 binary digits.",
            "answer": "10110111",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Decode hexadecimal 96 to a signed decimal integer.",
            "answer": "-106",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Encode decimal −9 as exactly 2 hexadecimal digits, without a prefix.",
            "answer": "F7",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          }
        ],
        "why": "73=01001001; invert and add 1 to get 10110111. Hex 96 is unsigned 150, so its signed value is 150−256=−106. −9 is 256−9=247=F7."
      },
      {
        "title": "Unsigned fractional conversion",
        "prompt": "Convert decimal 9.40625 to unsigned binary. Use no prefix or leading zeros, and exactly 5 digits after the binary point.",
        "parts": [
          {
            "label": "Binary value",
            "answer": "1001.01101",
            "marks": 2,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "9=1001₂; 0.40625=1/4+1/8+1/32=.01101₂. Together: 1001.01101."
      },
      {
        "title": "Encode a value below one",
        "prompt": "Encode decimal 0.15625 in IEEE 754 single precision (binary32).",
        "parts": [
          {
            "label": "Sign bit",
            "answer": "0",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Stored exponent: exactly 8 binary digits",
            "answer": "01111100",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Complete representation: 0x plus exactly 8 hex digits",
            "answer": "0x3E200000",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          }
        ],
        "why": "0.15625=.00101₂=1.01₂×2⁻³. The stored exponent is −3+127=124=01111100. The fraction is 01000000000000000000000; combined fields give 3E200000."
      },
      {
        "title": "Decode a negative float",
        "prompt": "Decode the normal binary32 representation 0xC1B40000.",
        "parts": [
          {
            "label": "Sign bit",
            "answer": "1",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Actual (unbiased) exponent, in decimal",
            "answer": "4",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Value, in signed decimal",
            "answer": "-22.5",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "Fields: 1 | 10000011 | 01101000000000000000000. Exponent 131−127=4; significand 1.01101₂. Therefore −1.01101₂×2⁴=−10110.1₂=−22.5."
      },
      {
        "title": "Recognising Boolean identities",
        "prompt": "A prime means NOT, + means OR and juxtaposition means AND. Choose the valid identity in each part.",
        "parts": [
          {
            "label": "De Morgan for an OR",
            "answer": "(A+B)'=A'B'",
            "marks": 1,
            "options": [
              "(A+B)'=A'+B'",
              "(A+B)'=A'B'",
              "(A+B)'=AB"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "Distributivity",
            "answer": "A(B+C)=AB+AC",
            "marks": 1,
            "options": [
              "A(B+C)=ABC",
              "A(B+C)=AB+AC",
              "A(B+C)=A+BC"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "Idempotence",
            "answer": "AA=A",
            "marks": 1,
            "options": [
              "AA=A",
              "AA=0",
              "AA=1"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "Complementing an OR gives the AND of the complements. AND distributes over OR. Repeating the same Boolean operand in an AND leaves it unchanged."
      },
      {
        "title": "K-map with overlapping groups",
        "prompt": "Find a minimal sum of products. Columns BC use Gray-code order. Use ASCII primes, no spaces or dots, and alphabetical variable order within terms.<table><caption>Output F</caption><tr><th>A / BC</th><th>00</th><th>01</th><th>11</th><th>10</th></tr><tr><th>0</th><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><th>1</th><td>0</td><td>1</td><td>1</td><td>1</td></tr></table>",
        "parts": [
          {
            "label": "Minimal expression",
            "answer": "B+AC",
            "marks": 3,
            "options": null,
            "kind": "boolean",
            "accept": []
          }
        ],
        "why": "Columns 11 and 10 across both rows form a group of four with B=1, giving B. Row A=1, columns 01 and 11 form a pair with C=1, giving AC. The groups overlap: F=B+AC."
      },
      {
        "title": "K-map with corner wrapping",
        "prompt": "Find a minimal sum of products. Both axes use Gray-code order. Use ASCII primes, no spaces or dots, and alphabetical variable order within terms.<table><caption>Output F</caption><tr><th>AB / CD</th><th>00</th><th>01</th><th>11</th><th>10</th></tr><tr><th>00</th><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><th>11</th><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><th>10</th><td>1</td><td>1</td><td>1</td><td>1</td></tr></table>",
        "parts": [
          {
            "label": "Minimal expression",
            "answer": "AD+B'D'",
            "marks": 3,
            "options": null,
            "kind": "boolean",
            "accept": []
          }
        ],
        "why": "The four corners form a wrapping group with B=0 and D=0, giving B'D'. Rows 11 and 10, columns 01 and 11 form the group AD. Together F=AD+B'D'."
      },
      {
        "title": "Flags and directives",
        "prompt": "Assume ARMv7 A32, 32-bit registers and four-byte words for this section.",
        "parts": [
          {
            "label": "After cmp r1, r2, which branch tests signed r1 > r2?",
            "answer": "bgt",
            "marks": 1,
            "options": [
              "bhi",
              "beq",
              "bgt",
              "bge"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "How many bytes does .asciz \"ARM\" allocate?",
            "answer": "4",
            "marks": 1,
            "options": [
              "4",
              "3",
              "12",
              "16"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "bgt implements signed greater-than (Z=0 and N=V); bhi is unsigned greater-than. .asciz emits three character bytes plus one zero terminator."
      },
      {
        "title": "Endian memory reconstruction",
        "prompt": "The bytes at ascending addresses 0x0040, 0x0041, 0x0042, 0x0043 are respectively 0x78, 0x56, 0x34, 0x12. Treat these as one 32-bit word. Drag or select answers. Options may be reused.",
        "parts": [
          {
            "label": "Word interpreted as little endian",
            "answer": "0x12345678",
            "marks": 1,
            "options": [
              "0x12345678",
              "0x78563412",
              "0x87654321",
              "0x00000012"
            ],
            "kind": "drop",
            "accept": []
          },
          {
            "label": "Word interpreted as big endian",
            "answer": "0x78563412",
            "marks": 1,
            "options": [
              "0x12345678",
              "0x78563412",
              "0x87654321",
              "0x00000012"
            ],
            "kind": "drop",
            "accept": []
          }
        ],
        "why": "The lowest-address byte is least significant in little endian: 78 is bits 7–0, 56 bits 15–8, 34 bits 23–16 and 12 bits 31–24. Big endian reads the same ascending bytes as 78563412."
      },
      {
        "title": "Shift and mask trace",
        "prompt": "<pre>mov r0, #0xb6\nlsl r1, r0, #2\nlsr r2, r0, #3\nand r3, r1, #0xff</pre>Enter all values as 0x followed by exactly 8 hexadecimal digits.",
        "parts": [
          {
            "label": "r1",
            "answer": "0x000002D8",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "r2",
            "answer": "0x00000016",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "r3",
            "answer": "0x000000D8",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          }
        ],
        "why": "B6=182. Left shift by 2 gives 728=2D8; logical right shift by 3 gives floor(182/8)=22=16 hex. AND with FF retains only the lowest byte D8."
      },
      {
        "title": "Translate one C expression",
        "prompt": "Map each C variable to the register of the same name. Write one lowercase ARM instruction per part; use explicit three-operand arithmetic.",
        "parts": [
          {
            "label": "r7 = r8 - 20;",
            "answer": "sub r7, r8, #20",
            "marks": 1,
            "options": null,
            "kind": "asm",
            "accept": [
              "sub r7, r8, #0x14"
            ]
          },
          {
            "label": "r0 = r1 ^ r2;",
            "answer": "eor r0, r1, r2",
            "marks": 1,
            "options": null,
            "kind": "asm",
            "accept": [
              "eor r0, r2, r1"
            ]
          },
          {
            "label": "r3 = r4 >> 3; (unsigned r4)",
            "answer": "lsr r3, r4, #3",
            "marks": 1,
            "options": null,
            "kind": "asm",
            "accept": [
              "mov r3, r4, lsr #3"
            ]
          }
        ],
        "why": "Use sub for subtraction, eor for bitwise XOR and lsr for an unsigned right shift. An unsigned right shift inserts zeros at the top."
      },
      {
        "title": "Complete a signed comparison",
        "prompt": "Fill the three blanks so the assembly implements the C block. Inputs are signed; no arithmetic overflow occurs. Each option may be used once.\n<pre>if (r1 == r2)\n    r0 = r1 + 4;\nelse\n    r0 = r2 - 4;</pre>\n<pre>cmp r1, r2\n[blank 1]\nadd r0, r1, #4\n[blank 2]\nnot_equal:\n[blank 3]\nfinish:</pre>",
        "parts": [
          {
            "label": "Blank 1",
            "answer": "bne not_equal",
            "marks": 1,
            "options": [
              "beq not_equal",
              "bne not_equal",
              "b finish",
              "sub r0, r2, #4",
              "sub r0, r1, #4"
            ],
            "kind": "drop",
            "accept": []
          },
          {
            "label": "Blank 2",
            "answer": "b finish",
            "marks": 1,
            "options": [
              "beq not_equal",
              "bne not_equal",
              "b finish",
              "sub r0, r2, #4",
              "sub r0, r1, #4"
            ],
            "kind": "drop",
            "accept": []
          },
          {
            "label": "Blank 3",
            "answer": "sub r0, r2, #4",
            "marks": 1,
            "options": [
              "beq not_equal",
              "bne not_equal",
              "b finish",
              "sub r0, r2, #4",
              "sub r0, r1, #4"
            ],
            "kind": "drop",
            "accept": []
          }
        ],
        "why": "When the values differ, bne jumps to the else case. On equality, add executes and b finish skips the else case. The else expression subtracts 4 from r2."
      },
      {
        "title": "Countdown with flag updates",
        "prompt": "Execution ends immediately after the loop terminates. Give register values in decimal.\n<pre>mov r0, #0\nmov r1, #4\nloop:\nadd r0, r0, r1\nsubs r1, r1, #1\nbne loop</pre>",
        "parts": [
          {
            "label": "Final r0",
            "answer": "10",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Final r1",
            "answer": "0",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "What determines whether bne repeats?",
            "answer": "Z from the subs instruction",
            "marks": 1,
            "options": [
              "whether r1 is negative",
              "C from the mov instruction",
              "the value of r0 directly",
              "Z from the subs instruction"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "The loop adds 4+3+2+1=10. subs decrements the counter and sets flags. Its final result is zero, so Z=1 and bne stops. The preceding add has no S suffix."
      },
      {
        "title": "Signed and unsigned byte loads",
        "prompt": "Assume little endian, four-byte words and an aligned data label. Enter 0x plus exactly 8 hex digits.\n<pre>.data\n.balign 4\ndata: .word 0x7F80FE01\n.text\nldr r0, =data\nldrb r1, [r0, #1]\nldrsb r2, [r0, #2]\nldr r3, [r0]</pre>",
        "parts": [
          {
            "label": "r1",
            "answer": "0x000000FE",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "r2",
            "answer": "0xFFFFFF80",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "r3",
            "answer": "0x7F80FE01",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          }
        ],
        "why": "Ascending bytes are 01 FE 80 7F. ldrb at offset 1 zero-extends FE; ldrsb at offset 2 sign-extends 80 (−128), giving FFFFFF80. The full word load preserves 7F80FE01."
      },
      {
        "title": "Match a conditional block",
        "prompt": "Match this assembly to signed C. Assume no arithmetic overflow. Execution ends at done.\n<pre>cmp r1, #0\nbge nonnegative\nrsb r0, r1, #0\nb done\nnonnegative:\nmov r0, r1\ndone:</pre>\nFor this question, rsb r0, r1, #0 computes r0 = 0 − r1.",
        "parts": [
          {
            "label": "Equivalent C block",
            "answer": "if (r1 < 0) r0 = -r1; else r0 = r1;",
            "marks": 2,
            "options": [
              "if (r1 > 0) r0 = -r1; else r0 = r1;",
              "if (r1 < 0) r0 = -r1; else r0 = r1;",
              "if (r1 == 0) r0 = 1; else r0 = 0;",
              "r0 = r1 - 1;"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "bge selects the copy for zero and positive values. Negative values are negated by reverse subtraction. This computes absolute value for the assumed non-overflowing inputs; INT_MIN is excluded by that assumption."
      },
      {
        "title": "Complete an array-summing loop",
        "prompt": "The array has exactly four 32-bit words. Complete the missing load so the program sums all four elements. Write one lowercase instruction using the existing index r1 scaled by lsl #2. Execution ends at done.\n<pre>.data\n.balign 4\nvalues: .word 3, 8, 2, 7\n.text\nldr r4, =values\nmov r0, #0\nmov r1, #0\nloop:\n[missing instruction]\nadd r0, r0, r2\nadd r1, r1, #1\ncmp r1, #4\nbne loop\ndone:</pre>",
        "parts": [
          {
            "label": "Missing instruction",
            "answer": "ldr r2, [r4, r1, lsl #2]",
            "marks": 2,
            "options": null,
            "kind": "asm",
            "accept": []
          },
          {
            "label": "Final r0 in decimal",
            "answer": "20",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Final r1 in decimal",
            "answer": "4",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "ldr r2, [r4, r1, lsl #2] loads the word at base+4×index, without changing the base or index. The loop loads indices 0,1,2,3 and sums 3+8+2+7=20. After the fourth increment r1=4, so bne is not taken."
      }
    ]
  },
  {
    "id": "mock-3",
    "title": "Mock 3",
    "description": "Wider signed conversions, byte stores, loops and byte counting.",
    "questions": [
      {
        "title": "Architecture and numeric representation",
        "prompt": "Select one answer per part.",
        "parts": [
          {
            "label": "A modified Harvard design typically combines…",
            "answer": "separate instruction/data caches with unified main memory",
            "marks": 1,
            "options": [
              "one register for every memory address",
              "separate instruction/data caches with unified main memory",
              "separate instruction/data main memories with no shared memory"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "Which decimal fraction has a finite binary expansion?",
            "answer": "0.625",
            "marks": 1,
            "options": [
              "0.1",
              "0.2",
              "0.625",
              "0.3"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "Modified Harvard commonly separates instruction/data caches while sharing main memory. 0.625=5/8=.101₂ terminates because its reduced denominator is a power of two."
      },
      {
        "title": "Unsigned integers",
        "prompt": "Follow each answer format exactly.",
        "parts": [
          {
            "label": "Convert decimal 346 to exactly 12 binary digits.",
            "answer": "000101011010",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Convert binary 1110100110 to hexadecimal, without a prefix or leading zeros.",
            "answer": "3A6",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "Convert hexadecimal 5D2 to decimal.",
            "answer": "1490",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "346=256+64+16+8+2 gives 101011010, padded to 12 bits as 000101011010. Group 0011 1010 0110 to obtain 3A6. 5D2=5×256+13×16+2=1490."
      },
      {
        "title": "Two’s complement at different widths",
        "prompt": "Use the width stated in each part.",
        "parts": [
          {
            "label": "Encode decimal −46 as exactly 8 binary digits.",
            "answer": "11010010",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Decode 12-bit hexadecimal F9C as a signed decimal integer.",
            "answer": "-100",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Encode decimal −300 in 16-bit two’s complement: exactly 4 hex digits, no prefix.",
            "answer": "FED4",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          }
        ],
        "why": "256−46=210=D2=11010010. F9C is unsigned 3996; subtract 4096 to get −100. 65536−300=65236=FED4."
      },
      {
        "title": "An unsigned binary fraction",
        "prompt": "Convert decimal 12.84375 to unsigned binary. Use no prefix or leading zeros and exactly 5 fractional bits.",
        "parts": [
          {
            "label": "Binary value",
            "answer": "1100.11011",
            "marks": 2,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "12=1100₂; .84375=1/2+1/4+1/16+1/32=.11011₂. Thus 1100.11011."
      },
      {
        "title": "Encode a negative fraction",
        "prompt": "Encode decimal −0.4375 as IEEE 754 binary32.",
        "parts": [
          {
            "label": "Sign bit",
            "answer": "1",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Stored exponent: exactly 8 binary digits",
            "answer": "01111101",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Full representation: 0x followed by exactly 8 hex digits",
            "answer": "0xBEE00000",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          }
        ],
        "why": "0.4375=.0111₂=1.11₂×2⁻². Sign=1, stored exponent=125=01111101 and fraction=11000000000000000000000. Combined fields give BEE00000."
      },
      {
        "title": "Decode a positive float",
        "prompt": "Decode the normal IEEE 754 binary32 representation 0x42160000.",
        "parts": [
          {
            "label": "Sign bit",
            "answer": "0",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Actual (unbiased) exponent in decimal",
            "answer": "5",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Represented value in decimal",
            "answer": "37.5",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "The fields are 0 | 10000100 | 00101100000000000000000. Exponent 132−127=5, significand 1.001011₂. Scaling yields 100101.1₂=37.5."
      },
      {
        "title": "Boolean identities",
        "prompt": "A prime means NOT; + means OR; juxtaposition means AND. Identify the valid identity in each part.",
        "parts": [
          {
            "label": "Distributivity of OR over AND",
            "answer": "A+BC=(A+B)(A+C)",
            "marks": 1,
            "options": [
              "A+BC=AB+AC",
              "A+BC=(A+B)(A+C)",
              "A+BC=(A+B)C"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "Double negation",
            "answer": "(A')'=A",
            "marks": 1,
            "options": [
              "(A')'=A",
              "(A')'=1",
              "(A')'=A'"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "Identity for OR",
            "answer": "A+0=A",
            "marks": 1,
            "options": [
              "A+0=0",
              "A+0=1",
              "A+0=A"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "OR distributes over AND in Boolean algebra. Complementing twice restores A. Zero is the identity element for OR."
      },
      {
        "title": "Three-variable K-map",
        "prompt": "Find a minimal sum of products. Columns BC use Gray-code order. Use ASCII primes, no spaces or AND dots, and alphabetical variables within each term.<table><caption>Output F</caption><tr><th>A / BC</th><th>00</th><th>01</th><th>11</th><th>10</th></tr><tr><th>0</th><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><th>1</th><td>0</td><td>0</td><td>0</td><td>1</td></tr></table>",
        "parts": [
          {
            "label": "Minimal expression",
            "answer": "A'B+BC'",
            "marks": 3,
            "options": null,
            "kind": "boolean",
            "accept": []
          }
        ],
        "why": "Row A=0, columns 11 and 10 give A'B. Column 10 in both rows gives BC'. Both pairs are needed to cover the two outer 1s; they overlap at A=0, BC=10."
      },
      {
        "title": "Four-variable K-map",
        "prompt": "Find a minimal sum of products. Both axes use Gray-code order. Use ASCII primes, no spaces or AND dots, and alphabetical variables within each term.<table><caption>Output F</caption><tr><th>AB / CD</th><th>00</th><th>01</th><th>11</th><th>10</th></tr><tr><th>00</th><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><th>01</th><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><th>11</th><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></table>",
        "parts": [
          {
            "label": "Minimal expression",
            "answer": "A'C+BD",
            "marks": 3,
            "options": null,
            "kind": "boolean",
            "accept": []
          }
        ],
        "why": "Rows 00 and 01, columns 11 and 10 form the group A'C. Rows 01 and 11, columns 01 and 11 form the group BD. These two overlapping groups cover every 1."
      },
      {
        "title": "ARM storage and flags",
        "prompt": "Assume ARMv7 A32, 32-bit registers and four-byte words throughout this section.",
        "parts": [
          {
            "label": "Which register does str r5, [r6, #4] overwrite?",
            "answer": "neither r5 nor r6",
            "marks": 1,
            "options": [
              "neither r5 nor r6",
              "r6 only",
              "r5 only",
              "both r5 and r6"
            ],
            "kind": "text",
            "accept": []
          },
          {
            "label": "After cmp r1, r2, beq tests…",
            "answer": "Z=1",
            "marks": 1,
            "options": [
              "C=0",
              "all flags equal zero",
              "N=1",
              "Z=1"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "The offset str writes memory at r6+4 and leaves both registers unchanged. beq depends only on the zero flag being set."
      },
      {
        "title": "Place four bytes",
        "prompt": "Store the 32-bit word 0xD42A70B9 starting at address 0x0080. Memory is byte-addressable. Drag a chip or choose from the dropdown. The endian cases are independent; options may be reused.",
        "parts": [
          {
            "label": "Little endian: byte at 0x0081",
            "answer": "0x70",
            "marks": 1,
            "options": [
              "0xD4",
              "0x2A",
              "0x70",
              "0xB9"
            ],
            "kind": "drop",
            "accept": []
          },
          {
            "label": "Little endian: byte at 0x0083",
            "answer": "0xD4",
            "marks": 1,
            "options": [
              "0xD4",
              "0x2A",
              "0x70",
              "0xB9"
            ],
            "kind": "drop",
            "accept": []
          },
          {
            "label": "Big endian: byte at 0x0082",
            "answer": "0x70",
            "marks": 1,
            "options": [
              "0xD4",
              "0x2A",
              "0x70",
              "0xB9"
            ],
            "kind": "drop",
            "accept": []
          }
        ],
        "why": "Little-endian ascending bytes are B9 70 2A D4. Big-endian ascending bytes are D4 2A 70 B9. Endianness changes byte placement, not bits within each byte."
      },
      {
        "title": "Sequential bitwise trace",
        "prompt": "<pre>mov r0, #0x69\nmov r1, #0x3c\neor r2, r0, r1\norr r3, r2, #0x80\nand r4, r3, #0x5f</pre>Enter 0x followed by exactly 8 hex digits. Later instructions use the earlier results.",
        "parts": [
          {
            "label": "r2",
            "answer": "0x00000055",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "r3",
            "answer": "0x000000D5",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "r4",
            "answer": "0x00000055",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          }
        ],
        "why": "69 XOR 3C=55. OR with 80 sets the top bit of the low byte, giving D5. D5 AND 5F=55. Upper 24 bits are zero throughout."
      },
      {
        "title": "One-line C translations",
        "prompt": "Variables map to the registers of the same name. Write one lowercase ARM instruction per part. Use explicit three-operand arithmetic.",
        "parts": [
          {
            "label": "r2 = r3 + r4;",
            "answer": "add r2, r3, r4",
            "marks": 1,
            "options": null,
            "kind": "asm",
            "accept": [
              "add r2, r4, r3"
            ]
          },
          {
            "label": "r5 = r6 & 15;",
            "answer": "and r5, r6, #15",
            "marks": 1,
            "options": null,
            "kind": "asm",
            "accept": [
              "and r5, r6, #0xf"
            ]
          },
          {
            "label": "r7 = r8 << 4; (unsigned r8)",
            "answer": "lsl r7, r8, #4",
            "marks": 1,
            "options": null,
            "kind": "asm",
            "accept": [
              "mov r7, r8, lsl #4"
            ]
          }
        ],
        "why": "Use add for addition, and with immediate #15 to retain the lowest four bits, and lsl #4 to shift left four positions. The stored shift result is limited to 32 bits."
      },
      {
        "title": "Complete a while loop",
        "prompt": "Complete the assembly to match this signed C code. Each option may be used once. No arithmetic overflow occurs.\n<pre>r0 = 0;\nr1 = 2;\nwhile (r1 &lt; 10) {\n    r0 = r0 + r1;\n    r1 = r1 + 2;\n}</pre>\n<pre>mov r0, #0\nmov r1, #2\nloop_test:\ncmp r1, #10\n[blank 1]\nadd r0, r0, r1\n[blank 2]\n[blank 3]\nfinish:</pre>",
        "parts": [
          {
            "label": "Blank 1",
            "answer": "bge finish",
            "marks": 1,
            "options": [
              "bgt finish",
              "bge finish",
              "add r1, r1, #1",
              "add r1, r1, #2",
              "b loop_test",
              "b finish"
            ],
            "kind": "drop",
            "accept": []
          },
          {
            "label": "Blank 2",
            "answer": "add r1, r1, #2",
            "marks": 1,
            "options": [
              "bgt finish",
              "bge finish",
              "add r1, r1, #1",
              "add r1, r1, #2",
              "b loop_test",
              "b finish"
            ],
            "kind": "drop",
            "accept": []
          },
          {
            "label": "Blank 3",
            "answer": "b loop_test",
            "marks": 1,
            "options": [
              "bgt finish",
              "bge finish",
              "add r1, r1, #1",
              "add r1, r1, #2",
              "b loop_test",
              "b finish"
            ],
            "kind": "drop",
            "accept": []
          }
        ],
        "why": "Exit when r1≥10, so use bge. Increment by 2 and return to the test. The executed values are 2,4,6,8, giving final r0=20 and r1=10."
      },
      {
        "title": "Trace a comparison result",
        "prompt": "Treat r1 and r2 as signed 32-bit integers. Execution ends at done.\n<pre>mov r0, #0\ncmp r1, r2\nbeq done\nmov r0, #1\nbgt done\nmov r0, #2\ndone:</pre>",
        "parts": [
          {
            "label": "Final r0 when r1=−5 and r2=−8 (decimal)",
            "answer": "1",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Final r0 when r1=4 and r2=9 (decimal)",
            "answer": "2",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Purpose",
            "answer": "encode equal as 0, greater as 1, less as 2",
            "marks": 1,
            "options": [
              "calculate r1 minus r2",
              "encode equal as 0, greater as 1, less as 2",
              "select the signed maximum",
              "encode equal as 0, greater as 2, less as 1"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "Equal inputs branch with r0=0. Unequal inputs set r0=1. bgt retains that for r1>r2; otherwise r0 becomes 2. The mov instructions do not update flags, so bgt still uses cmp."
      },
      {
        "title": "Store a byte, then reload",
        "prompt": "Assume little endian, four-byte words and aligned data. Enter each result as 0x plus exactly 8 hex digits.\n<pre>.data\n.balign 4\nitem: .word 0x11223344\n.text\nldr r0, =item\nmov r1, #0xaa\nstrb r1, [r0, #2]\nldr r2, [r0]\nldrsb r3, [r0, #2]</pre>",
        "parts": [
          {
            "label": "r2",
            "answer": "0x11AA3344",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          },
          {
            "label": "r3",
            "answer": "0xFFFFFFAA",
            "marks": 1,
            "options": null,
            "kind": "hex",
            "accept": []
          }
        ],
        "why": "Original ascending bytes are 44 33 22 11. strb replaces just offset 2: 44 33 AA 11. The word becomes 11AA3344. Loading AA as a signed byte sign-extends its top bit to give FFFFFFAA (−86)."
      },
      {
        "title": "Match conditional arithmetic",
        "prompt": "Choose the signed C block with the same behaviour. No arithmetic overflow occurs. Execution ends at done.\n<pre>cmp r2, r3\nblt smaller\nsub r0, r2, r3\nb done\nsmaller:\nadd r0, r2, r3\ndone:</pre>",
        "parts": [
          {
            "label": "Equivalent C",
            "answer": "if (r2 < r3) r0 = r2 + r3; else r0 = r2 - r3;",
            "marks": 2,
            "options": [
              "if (r2 <= r3) r0 = r2 + r3; else r0 = r2 - r3;",
              "r0 = r3 - r2;",
              "if (r2 > r3) r0 = r2 + r3; else r0 = r2 - r3;",
              "if (r2 < r3) r0 = r2 + r3; else r0 = r2 - r3;"
            ],
            "kind": "text",
            "accept": []
          }
        ],
        "why": "blt chooses addition only for signed r2<r3. Equality follows the subtraction path, which distinguishes < from <= in the options."
      },
      {
        "title": "Complete a byte-counting program",
        "prompt": "The program counts nonzero bytes in the four-byte array. Complete the missing instruction so it matches the C test shown. Type one lowercase instruction. Execution ends at done.\n<pre>// for each of the four bytes:\n// if (bytes[i] == 0) skip incrementing the count;</pre>\n<pre>.data\nbytes: .byte 0, 5, 0, 9\n.text\nldr r4, =bytes\nmov r0, #0\nmov r1, #0\nloop:\nldrb r2, [r4, r1]\ncmp r2, #0\n[missing instruction]\nadd r0, r0, #1\nskip:\nadd r1, r1, #1\ncmp r1, #4\nbne loop\ndone:</pre>",
        "parts": [
          {
            "label": "Missing instruction",
            "answer": "beq skip",
            "marks": 2,
            "options": null,
            "kind": "asm",
            "accept": []
          },
          {
            "label": "Final count r0 (decimal)",
            "answer": "2",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          },
          {
            "label": "Final index r1 (decimal)",
            "answer": "4",
            "marks": 1,
            "options": null,
            "kind": "text",
            "accept": []
          }
        ],
        "why": "beq skip bypasses the count increment for a zero byte. Only 5 and 9 increment r0, giving 2. The index increment occurs on both paths, and the loop stops at r1=4. Byte-array indexing needs no ×4 scaling."
      }
    ]
  }
];
