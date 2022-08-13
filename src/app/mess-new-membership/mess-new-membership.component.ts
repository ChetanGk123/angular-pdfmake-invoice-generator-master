import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-mess-new-membership',
  templateUrl: './mess-new-membership.component.html',
  styleUrls: ['./mess-new-membership.component.css'],
})
export class MessNewMembershipComponent implements OnInit {
  src: any;
  logo: any;
  loading: boolean = false;
  constructor(protected _sanitizer: DomSanitizer, private http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;
    this.http
      .get('https://stagespace.tech/mess/api/v1/base64')
      .subscribe((result: any) => {
        console.log(result.data);
        this.logo = result.data;
        this.generatePDF('open');
      });
  }
  async generatePDF(action = 'open') {
    let docDefinition = {
      pageSize: 'A4',
      pageMargins: [0, 10, 0, 10],
      defaultStyle: {
        fontSize: 10,
      },
      content: [
        {
          table: {
            widths: ['*', '*', '*'],
            body: [
              [
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
                                    width: 50,
                                    height: 50,
                                    alignment: 'left',
                                  },
                                  {
                                    columns: [
                                      [
                                        {
                                          text: 'Happy Plates',
                                          fontSize: 11,
                                          margin: [0, 0, 0, 0],
                                          bold: false,
                                          alignment: 'center',
                                        },
                                        {
                                          text: 'Royal Mess',
                                          fontSize: 18,
                                          margin: [0, 0, 0, 0],
                                          bold: true,
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
                                      text: 'Mob No : 9480644248',
                                      alignment: 'center',
                                      fontSize: 10,
                                    },
                                  ],
                                ],
                                margin: [45, -10, 0, 0],
                                alignment: 'center',
                              },
                            ],
                          ],
                          border: [false, false, false, false],
                        },
                      ],
                      [
                        {
                          columns: [
                            [
                              {
                                text: 'Date: ' + new Date().toDateString(),
                                alignment: 'right',
                              },
                            ],
                          ],
                          lineHeight: 1.2,
                          border: [false, false, false, true],
                        },
                      ],
                      [
                        {
                          columns: [
                            [
                              {
                                text: 'Member Details',
                                bold: true,
                                fontSize: 16,
                                decoration: 'underline',
                                alignment: 'center',
                                margin: [0, 2, 0, 2],
                              },
                              {
                                text: `Name: Chetan Govindaraju Khajjidoni`,
                                alignment: 'center',
                                bold: true,
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: 'Phone No: ',
                                    },
                                  ],
                                  [
                                    {
                                      text: `987654321`,
                                    },
                                  ],
                                ],
                                margin: [0, 5, 0, 0],
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: 'Card No:',
                                    },
                                  ],
                                  [
                                    {
                                      text: `987654321`,
                                    },
                                  ],
                                ],
                                margin: [0, 5, 0, 0],
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: 'Balance:',
                                    },
                                  ],
                                  [
                                    {
                                      text: `₹ 800.00`,
                                    },
                                  ],
                                ],
                                margin: [0, 5, 0, 0],
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: 'Gender:',
                                    },
                                  ],
                                  [
                                    {
                                      text: `Male`,
                                    },
                                  ],
                                ],
                                margin: [0, 5, 0, 0],
                              },
                            ],
                          ],
                          // margin: [left, top, right, bottom]
                          margin: [10, 0, 10, 10],
                          border: [false, false, false, true],
                        },
                      ],
                      [
                        {
                          columns: [
                            [
                              {
                                text: 'Membership Details',
                                bold: true,
                                fontSize: 16,
                                decoration: 'underline',
                                alignment: 'center',
                                margin: [0, 5, 0, 5],
                              },
                              {
                                text: `Name: Daily Combo`,
                                alignment: 'center',
                                bold: true,
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: 'Membership No:',
                                    },
                                  ],
                                  [
                                    {
                                      text: `654646464644`,
                                    },
                                  ],
                                ],
                                margin: [0, 5, 0, 0],
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: 'Contents: ',
                                    },
                                  ],
                                  [
                                    {
                                      text: `Breakfeast, Lunch, Snacks, Dinner`,
                                    },
                                  ],
                                ],
                                margin: [0, 5, 0, 0],
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: 'Days:',
                                    },
                                  ],
                                  [
                                    {
                                      text: `30`,
                                    },
                                  ],
                                ],
                                margin: [0, 5, 0, 0],
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: 'Start Date:',
                                    },
                                  ],
                                  [
                                    {
                                      text: `12-12-1996`,
                                    },
                                  ],
                                ],
                                margin: [0, 5, 0, 0],
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: 'End Date:',
                                    },
                                  ],
                                  [
                                    {
                                      text: `12-12-1663`,
                                    },
                                  ],
                                ],
                                margin: [0, 5, 0, 0],
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: 'Price:',
                                    },
                                  ],
                                  [
                                    {
                                      text: `₹ 5000.00`,
                                    },
                                  ],
                                ],
                                margin: [0, 5, 0, 0],
                              },
                            ],
                          ],
                          // margin: [left, top, right, bottom]
                          margin: [10, 0, 10, 0],
                          border: [false, false, false, true],
                        },
                      ],
                    ],
                  },
                  // margin: [left, top, right, bottom]
                  margin: [5, 10, 5, 10],
                },
              ],
            ],
            borders: [true, false, false, false],
          },
          layout: {
            vLineWidth: function (i, node) {
              return i === 0 || i === node.table.widths.length ? 0 : 1;
            },
            hLineWidth: function (i, node) {
              return i === 0 || i === node.table.widths.length ? 0 : 0;
            },

            vLineColor: function (i, node) {
              return 'black';
            },

            vLineStyle: function (i, node) {
              if (i === 0 || i === node.table.widths.length) {
                return null;
              }
              return { dash: { length: 10 } };
            },
          },
        },
      ],
      images: {
        logo: this.logo,
      },
    };
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getDataUrl((dataUrl) => {
      this.src = this._sanitizer.bypassSecurityTrustResourceUrl(dataUrl);
      this.loading = false;
    });
  }
}
