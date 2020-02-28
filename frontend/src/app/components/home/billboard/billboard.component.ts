import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css']
})
export class BillboardComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    (function($) {
      "use strict"
      // Products Slick
      $('.billboard-slick').each(function() {
        var $this = $(this);
    
        $this.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          speed: 300,
          responsive: [{
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
        });
      });
    })(jQuery);
  }

}
