import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-tocken',
  templateUrl: './tocken.component.html',
  styleUrls: ['./tocken.component.css'],
})
export class TockenComponent implements OnInit {
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
      //pageSize: 'A4',
      pageSize: {
        width: 160,
        height: 'auto',
      },
      defaultStyle: {
        fontSize: 7,
      },
      pageMargins: [2, 10, 2, 10],
      content: [
        {
          columns: [
            [
              {
                columns: [
                  {},
                  {
                    image: this.logo,
                    width: 60,
                    height: 60,
                    alignment: 'center',
                  },
                  {},
                ],
              },
              {
                text: 'HAPPY PLATES',
                fontSize: 15,
                margin: [0, 5, 0, 0],
                bold: true,
                alignment: 'center',
              },
              {
                text: 'FC GROUND FLOOR',
                fontSize: 8,
                margin: [0, 2, 0, 0],
                alignment: 'center',
              },
              {
                text: 'Sanjay Ghodawat University',
                fontSize: 8,
                margin: [0, 2, 0, 0],
                alignment: 'center',
              },
              {
                text: '90111633330006',
                fontSize: 8,
                margin: [0, 2, 0, 0],
                alignment: 'center',
              },
            ],
          ],
        },
        {
          columns: [
            [
              {
                text: 'MMTHMB882852783',
                alignment: 'left',
                fontSize: 7,
              },
            ],
            [
              {
                text: '03-Aug-22 10:17:17 PM',
                alignment: 'right',
                fontSize: 7,
              },
            ],
          ],
          margin: [0, 10, 0, 0],
        },
        {
          table: {
            widths: [1, 'auto', 25, 12, '*'],
            body: [
              [
                {
                  text: '#',
                },
                {
                  text: 'Item',
                },
                {
                  text: 'Price',
                },
                {
                  text: 'Qty',
                },
                {
                  text: 'Amount',
                },
              ],
              [
                {
                  text: '1',
                },
                {
                  text: '15 DAYS FULL MESS',
                },
                {
                  text: '200.00',
                },
                {
                  text: '999',
                },
                {
                  text: '2021',
                },
              ],
              [
                {
                  text: '#',
                },
                {
                  text: 'Total',
                },
                {},
                { text: '999' },
                { text: '2021' },
              ],
              // [
              //   {
              //     text: '#',
              //     border: [false, true, false, true],
              //   },
              //   {
              //     text: 'Net Payable',
              //     border: [false, true, false, true],
              //   },
              //   {
              //     text: '2200.00',
              //     colSpan: 3,
              //     border: [false, true, false, true],
              //   },
              //   {},
              //   {},
              // ],
              // [
              //   {
              //     text: '#',
              //     border: [false, true, false, true],
              //   },
              //   {
              //     text: 'Paid',
              //     border: [false, true, false, true],
              //   },
              //   {
              //     text: '0.00',
              //     colSpan: 3,
              //     border: [false, true, false, true],
              //   },
              //   {},
              //   {},
              // ],
              // [
              //   {
              //     text: '#',
              //     border: [false, true, false, true],
              //   },
              //   {
              //     text: 'Balance',
              //     border: [false, true, false, true],
              //   },
              //   {
              //     text: '0.00',
              //     colSpan: 3,
              //     border: [false, true, false, true],
              //   },
              //   {},
              //   {},
              // ],
            ],
          },
          layout: {
            vLineWidth: function (i, node) {
              return i === 0 || i === node.table.widths.length ? 0 : 0;
            },
            vLineStyle: function (i, node) {
              return { dash: { length: 0 } };
            },
            hLineWidth: function (i, node) {
              return i === 0 || i === node.table.widths.length ? 1 : 1;
            },
            hLineStyle: function (i, node) {
              return { dash: { length: 2 } };
            },
          },
        },
        {
          columns: [
            [
              {
                text: 'Thank you, visit again!',
                fontSize: 8,
                margin: [0, 2, 0, 0],
                alignment: 'center',
              },
              {
                text: 'Software by: The Techvaidya 7447553739',
                fontSize: 8,
                margin: [0, 2, 0, 0],
                alignment: 'center',
              },
            ],
          ],
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
