import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(protected _sanitizer: DomSanitizer) {}
  image = 'https://royalpalacelkp.com/app/uploads/general_docs/logo.png';
  ngOnInit(): void {
    this.generatePDF('open');
  }
  src: any;
  async generatePDF(action = 'open') {
    let docDefinition = {
      pageSize: 'A4',
      pageMargins: [ 20, 20, 20, 20 ],
      content:[
          {
            table: {
              headerRows: 1,
              widths: ["*"],
              body: [
                [
                  {
                      columns: [
                        [
                          {
                            columns: [
                              {
                                image:
                                'snow',
                                width: 60,
                                height: 60,
                                alignment: "left",
                              },
                              {
                                columns: [
                                  [
                                    {
                                      text: "Balaji vidyavardhaka sangha (ri)",
                                      fontSize: 11,
                                      margin: [-80, 0, 0, 0],
                                      bold: false,
                                      alignment: "center",
                                    },
                                    {
                                      text: "Royal Palace International School",
                                      fontSize: 18,
                                      margin: [-80, 0, 0, 0],
                                      bold: true,
                                      alignment: "center",
                                    },
                                    {
                                      text: "Lokapur",
                                      fontSize: 18,
                                      bold: true,
                                      margin: [-80, 0, 0, 0],
                                      alignment: "center",
                                    },
                                  ],
                                ],
                                alignment: "left",
                                margin: [-10, 0],
                              },
                            ],
                          },
                          {
                            columns: [
                              [
                                {
                                  text: "Mob No : 9480644248 \t 7795970599",
                                  alignment: "center",
                                  fontSize: 10,
                                },
                              ],
                            ],
                            alignment: "center",
                          },
                          {
                            columns: [
                              [
                                {
                                  text: "Tq: Mudhol",
                                  fontSize: 12,
                                  alignment: "left",
                                  margin: [40, 0, 0, 0],
                                },
                              ],
                              [
                                {
                                  text: "Dt: Bagalkot",
                                  fontSize: 12,
                                  alignment: "right",
                                  margin: [0, 0, 40, 0],
                                },
                              ],
                            ],
                            margin: [0, 10, 0, 0],
                          },
                        ],
                      ],
                    },
                  ],
                ],
            },
          },
      ],
      images:{
        snow: this.image,},
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


  async getBase64ImageFromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader  = new FileReader();
      reader.addEventListener("load", function () {
          resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }
}
