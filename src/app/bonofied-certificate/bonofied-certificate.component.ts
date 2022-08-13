import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-bonofied-certificate',
  templateUrl: './bonofied-certificate.component.html',
  styleUrls: ['./bonofied-certificate.component.css'],
})
export class BonofiedCertificateComponent implements OnInit {
  src: any;
  logo: any;
  loading: boolean = false;
  constructor(protected _sanitizer: DomSanitizer, private http: HttpClient) {}

  ngOnInit(): void {
    this.generatePDF('open');
  }

  async generatePDF(action = 'open') {
    pdfMake.fonts = {
      JosefinSans: {
        normal: `${window.location.origin}/assets/JosefinSans-Regular.ttf`,
        italic: `${window.location.origin}/assets/JosefinSans-Italic.ttf`,
        bold: `${window.location.origin}/assets/JosefinSans-Bold.ttf`,
      },
      Kannada: {
        normal: `${window.location.origin}/assets/NotoSansKannada/NotoSansKannada-Regular.ttf`,
        italic: `${window.location.origin}/assets/NotoSansKannada/NotoSansKannada-Italic.ttf`,
        bold: `${window.location.origin}/assets/NotoSansKannada/NotoSansKannada-Bold.ttf`,
      },
    };
    let docDefinition = {
      pageSize: 'A4',

      defaultStyle: {
        fontSize: 16,
        font: 'JosefinSans',
      },
      pageMargins: [20, 0],
      content: [
        {
          table: {
            widths: ['*'],
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
                                text: 'Date:______________',
                                margin: [30, 30, 0, 10],
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: [
                                        {
                                          text: [
                                            'BONOFIED CERTIFICATE\n',
                                            {
                                              text: '.......................................................',
                                              fontSize: 15,
                                            },
                                          ],
                                          characterSpacing: 2,
                                        },
                                      ],
                                      fontSize: 25,
                                    },
                                  ],
                                ],
                                margin: [0, 0, 0, -15],
                                alignment: 'center',
                              },
                              {
                                text: [
                                  'This is to certify that Mr./Mrs. ',
                                  {
                                    text: 'Chetan G k',
                                    decoration: 'underline',
                                  },
                                  ' S/O or D/O of Mr./Ms.',
                                  {
                                    text: 'Govindaraju',
                                    decoration: 'underline',
                                  },
                                  ' bearing roll number ',
                                  {
                                    text: '2BA15IS092',
                                    decoration: 'underline',
                                  },
                                  ' is a student of ',
                                  {
                                    text: '2nd Standard,',
                                    decoration: 'underline',
                                  },
                                  ' for the academic year ',
                                  {
                                    text: '2019 - 2020',
                                    decoration: 'underline',
                                  },
                                  '. He/She is a bonified student of Royal Palace International School.',
                                ],
                                margin: [30, 30],
                                lineHeight: 1.5,
                                alignment: 'justify',
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: '__________________________\n Royal Palace International School\n Lokapur.(Seal)',
                                      fontSize: 12,
                                      alignment: 'center',
                                    },
                                  ],
                                  [
                                    {
                                      text: '________________\n Signature\n Registrar/Principal/Dean',
                                      fontSize: 12,
                                      alignment: 'center',
                                    },
                                  ],
                                ],
                                margin: [30, 10, 30, 30],
                              },
                            ],
                          ],
                        },
                      ],
                    ],
                  },
                },
              ],
            ],
          },
          margin: [20, 40, 20, 30],
        },
        {
          table: {
            widths: ['*'],
            body: [
              [
                {
                  columns: [
                    [
                      {
                        text: 'Date:______________',
                        margin: [30, 30, 0, 10],
                      },
                      {
                        columns: [
                          [
                            {
                              text: [
                                {
                                  text: [
                                    'BONOFIED CERTIFICATE\n',
                                    {
                                      text: '.......................................................',
                                      fontSize: 15,
                                    },
                                  ],
                                  characterSpacing: 2,
                                },
                              ],
                              fontSize: 25,
                            },
                          ],
                        ],
                        margin: [0, 0, 0, -15],
                        alignment: 'center',
                      },
                      {
                        text: [
                          'This is to certify that Mr./Mrs. ',
                          { text: 'Chetan G k', decoration: 'underline' },
                          ' S/O or D/O of Mr./Ms.',
                          { text: 'Govindaraju', decoration: 'underline' },
                          ' bearing roll number ',
                          { text: '2BA15IS092', decoration: 'underline' },
                          ' is a student of ',
                          { text: '2nd Standard,', decoration: 'underline' },
                          ' for the academic year ',
                          { text: '2019 - 2020', decoration: 'underline' },
                          '. He/She is a bonified student of Royal Palace International School.',
                        ],
                        margin: [30, 30],
                        lineHeight: 1.5,
                        alignment: 'justify',
                      },
                      {
                        columns: [
                          [
                            {
                              text: '__________________________\n Royal Palace International School\n Lokapur.(Seal)',
                              fontSize: 12,
                              alignment: 'center',
                            },
                          ],
                          [
                            {
                              text: '________________\n Signature\n Registrar/Principal/Dean',
                              fontSize: 12,
                              alignment: 'center',
                            },
                          ],
                        ],
                        margin: [30, 10, 30, 30],
                      },
                    ],
                  ],
                },
              ],
            ],
          },
          margin: [20, 40, 20, 30],
        },
      ],
    };
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getDataUrl((dataUrl) => {
      this.src = this._sanitizer.bypassSecurityTrustResourceUrl(dataUrl);
      this.loading = false;
    });
  }
}
