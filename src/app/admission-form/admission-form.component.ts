import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css'],
})
export class AdmissionFormComponent implements OnInit {
  src: any;
  profileUrl: any;
  constructor(protected _sanitizer: DomSanitizer) {}

  async ngOnInit() {
    this.generatePDF('open');
  }

  async generatePDF(action = 'open') {
    let docDefinition = {
      pageSize: 'A4',
      pageMargins: [10, 15, 10, 15],
      content: [
        {
          table: {
            widths: ['*'],
            body: [
              [
                {
                  columns: [
                    [
                      {
                        columns: [
                          {
                            image: 'logo',
                            width: 60,
                            height: 60,
                            alignment: 'left',
                          },
                          {
                            columns: [
                              [
                                {
                                  text: 'Balaji vidyavardhaka sangha (R)',
                                  fontSize: 11,
                                  margin: [0, 0, 0, 0],
                                  bold: false,
                                  alignment: 'center',
                                },
                                {
                                  text: 'Royal Palace International English Medium',
                                  fontSize: 22,
                                  margin: [0, 0, 0, 0],
                                  bold: true,
                                  alignment: 'center',
                                },
                                {
                                  text: 'Primary & High School Lokapur',
                                  fontSize: 20,
                                  bold: true,
                                  margin: [0, 0, 0, 0],
                                  alignment: 'center',
                                },
                              ],
                            ],
                            alignment: 'left',
                            margin: [0, 0],
                          },
                        ],
                      },
                      {
                        columns: [
                          [
                            {
                              text: 'Mob No : 9480644248 \t 7795970599',
                              alignment: 'center',
                              fontSize: 10,
                            },
                          ],
                        ],
                        margin: [50, 0, 0, 0],
                        alignment: 'center',
                      },
                      {
                        columns: [
                          [
                            {
                              text: 'Tq: Mudhol',
                              fontSize: 12,
                              alignment: 'left',
                              margin: [40, 0, 0, 0],
                            },
                          ],
                          [
                            {
                              text: 'Dt: Bagalkot',
                              fontSize: 12,
                              alignment: 'right',
                              margin: [0, 0, 40, 0],
                            },
                          ],
                        ],
                        margin: [0, 10, 0, 20],
                      },
                    ],
                  ],
                  margin: [10, 10, 10, 0],
                  border: [true, true, true, false],
                },
              ],
              [
                {
                  // margin: [left, top, right, bottom]
                  border: [true, false, true, false],
                  columns: [
                    [],
                    [
                      {
                        table: {
                          headerRows: 1,
                          widths: ['*'],
                          body: [
                            [
                              {
                                text: 'APPLICATION OF ADMISSION',
                                alignment: 'center',
                                fontSize: 17,
                                bold: true,
                              },
                            ],
                          ],
                        },
                        margin: [-40, 20, -30, 0],
                      },
                    ],
                    [
                      {
                        image: 'logo',
                        width: 80,
                        height: 80,
                        alignment: 'right',
                      },
                    ],
                  ],

                  margin: [20, -20, 20, 0],
                },
              ],

              [
                {
                  border: [true, true, true, true],
                  table: {
                    dontBreakRows: true,
                    widths: ['*', '*'],
                    heights: [
                      28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
                      28, 100, 28, 100, 28, 28, 220, 28, 28, 28, 80,
                    ],
                    body: [
                      [
                        {
                          text: 'To.\nThe Headmaster/Headmistress',
                          border: [false, false, false, false],
                        },
                        {
                          text: ' ',
                          alignment: 'center',
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          text: 'Admission Date:\t 11-05-2017',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {
                          text: 'Admission No:\t 20172902110433043',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                      ],
                      [
                        {
                          colSpan: 2,
                          text: 'Student Details',
                          margin: [5, 8, 0, 0],
                          fontSize: 18,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                      [
                        {
                          colSpan: 2,
                          text: '1. Name of the pupil :\tLOKESH VITTAL GASTI LOKESH VITTAL GASTI LOKESH VITTAL',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {},
                      ],
                      [
                        {
                          text: '2. Date Of Birth:\t 11-05-2017',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {
                          text: '3. Gender:\t MALE',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                      ],
                      [
                        {
                          colSpan: 2,
                          text: '4. Religion/Cast/Category :\tHINDU / VALMIKI / ST',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {},
                      ],
                      [
                        {
                          colSpan: 2,
                          text: '5. SATS NO :20172902110433043',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {},
                      ],
                      [
                        {
                          colSpan: 2,
                          text: 'Parents Details',
                          margin: [5, 8, 0, 0],
                          fontSize: 18,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                      [
                        {
                          colSpan: 2,
                          text: '6. Father Name :',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {},
                      ],
                      [
                        {
                          text: '7. Phone No:\t 9972777455',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {
                          text: '8. Occupation:\t Bussinessman',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                      ],
                      [
                        {
                          text: '9. Mothers Name :',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {
                          text: '20172902110433043',
                          margin: [-145, 5, 10, 5],
                          border: [false, false, false, true],
                        },
                      ],
                      [
                        {
                          text: '10. Phone No:\t 9972777455',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {
                          text: '11. Occupation:\t Bussinessman',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                      ],
                      [
                        {
                          colSpan: 2,
                          text: 'Guardian Details',
                          margin: [5, 8, 0, 0],
                          fontSize: 18,
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                      [
                        {
                          colSpan: 2,
                          text: '12. Guardian Name :\t20172902110433043',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {},
                      ],
                      [
                        {
                          text: '13. Guardian Relation:\t Father',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {
                          text: '14. Phone No:\t 9972777455',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                      ],
                      [
                        {
                          colSpan: 2,
                          text: '15. Guardian Address :\t\n\nS/O: VITTAL GASTI AT: LOKAPUR TQ: MUDHOL DIST: BAGALKOT',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {},
                      ],
                      [
                        {
                          colSpan: 2,
                          text: '16. Child with special Needs? :\t No',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                      [
                        {
                          colSpan: 2,
                          border: [false, false, false, true],
                          table: {
                            widths: ['*', '*'],
                            heights: 18,
                            body: [
                              [
                                {
                                  colSpan: 2,
                                  text: 'Address Details',
                                  fontSize: 18,
                                  border: [false, false, false, false],
                                },
                                {},
                              ],
                              [
                                {
                                  text: 'Permanent Address:',
                                  border: [false, false, false, false],
                                },
                                {
                                  text: 'Present Address',
                                  border: [false, false, false, false],
                                },
                              ],
                              [
                                {
                                  text: 'S/O: VITTAL GASTI AT: LOKAPUR TQ: MUDHOL DIST: BAGALKOT',
                                  margin: [0, 5, 0, 0],
                                  border: [false, false, false, false],
                                },
                                {
                                  text: 'S/O: VITTAL GASTI AT: LOKAPUR TQ: MUDHOL DIST: BAGALKOT',
                                  margin: [0, 5, 0, 0],
                                  border: [false, false, false, false],
                                },
                              ],
                            ],
                            margin: [10],
                          },
                        },
                        {
                          text: ' ',
                          border: [false, false, false, true],
                        },
                      ],
                      [
                        {
                          text: '17. Academin Year :\t 2022-23',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {
                          text: '18. Medium:\t ENGLISH',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                      ],
                      [
                        {
                          colSpan: 2,
                          text: '19. Class :\t6th',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {},
                      ],
                      [
                        {
                          colSpan: 2,
                          border: [false, false, false, true],
                          table: {
                            widths: [30, '*', '*', 'auto'],
                            heights: 25,
                            body: [
                              [
                                {
                                  colSpan: 4,
                                  text: 'Document Details',
                                  fontSize: 18,
                                  border: [false, false, false, false],
                                },
                                {},
                                {},
                                {},
                              ],
                              [
                                {
                                  text: 'SlNo',
                                  border: [false, false, false, false],
                                },
                                {
                                  text: 'Document Name',
                                  border: [false, false, false, false],
                                },
                                {
                                  colSpan: 2,
                                  text: 'Document Number',
                                  border: [false, false, false, false],
                                },
                                {},
                              ],
                              [
                                {
                                  text: '1',
                                  margin: [0, 5, 0, 0],
                                  border: [false, true, false, true],
                                },
                                {
                                  text: 'Aadhar Card ',
                                  margin: [0, 5, 0, 0],
                                  border: [false, true, false, true],
                                },
                                {
                                  text: '345449094285',
                                  margin: [0, 5, 0, 0],
                                  border: [false, true, false, true],
                                },
                                {
                                  text: ' [ \t]',
                                  margin: [0, 5, 0, 0],
                                  border: [false, true, false, false],
                                },
                              ],
                              [
                                {
                                  text: '2',
                                  margin: [0, 5, 0, 0],
                                  border: [false, true, false, true],
                                },
                                {
                                  text: 'Father Aadhar Card ',
                                  margin: [0, 5, 0, 0],
                                  border: [false, true, false, true],
                                },
                                {
                                  text: '345449094285',
                                  margin: [0, 5, 0, 0],
                                  border: [false, true, false, true],
                                },
                                {
                                  text: ' [ \t]',
                                  margin: [0, 5, 0, 0],
                                  border: [false, true, false, true],
                                },
                              ],
                            ],
                            margin: [10],
                          },
                        },
                        {
                          text: ' ',
                          border: [false, false, false, true],
                        },
                      ],
                      [
                        {
                          colSpan: 2,
                          text: '20. Languages Studied :\t Eng, Kan, Hin',
                          margin: [5, 8, 0, 5],
                          border: [false, false, false, true],
                        },
                        {},
                      ],
                      [
                        {
                          colSpan: 2,
                          text: '21. Previous medium of instruction :\t English',
                          margin: [5, 5, 9, 5],
                          border: [false, false, false, true],
                        },
                        {},
                      ],
                      [
                        {
                          colSpan: 2,
                          text: [
                            {
                              text: 'Rules And Regulations\n',
                              fontSize: 18,
                            },
                          ],

                          margin: [5, 5, 9, 0],
                          border: [false, false, false, false],
                        },
                        {},
                      ],
                      [
                        {
                          colSpan: 2,
                          margin: [5, 5, 9, 5],
                          border: [false, false, false, false],
                          ol: [
                            'Uniform is compulsory.',
                            'Attending all scheduled classes is manditory.',
                            'having attendance more that 80% is compulsary',
                          ],
                        },
                        {},
                      ],
                    ],
                  },
                  margin: [10, -36, 10, 0],
                },
              ],
            ],
          },
          margin: [10, 0, 10, 0],
        },
        {
          // text: "Signature of principal with date \nand school seal",
          // alignment: "right",
          columns: [
            [
              {
                text: 'Signature Of Parent/Guardian',
                alignment: 'center',
              },
            ],
            [
              {
                text: 'Signature Of Headmaster/Headmistress',
                alignment: 'center',
              },
            ],
          ],
          margin: [10, 60, 30, 0],
        },
      ],
      images: {
        logo: 'data:image/png;base64,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',
      },
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15],
        },
      },
    };
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getDataUrl((dataUrl) => {
      this.src = this._sanitizer.bypassSecurityTrustResourceUrl(dataUrl);
    });
  }
}
