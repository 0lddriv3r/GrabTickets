var performid = '210036688';
var priceid = '220673359';
var person = '2';

while (1) {
  var re = main();

  if (re == 1) {
    alert('快去付款！')
    break;
  }

  sleep(100);
}

function sleep(n) {
  var start = new Date().getTime();
  while (true) if (new Date().getTime() - start > n) break;
}

function main() {
  var buy = document.getElementById('buybtn');
  var Xuanzuo = document.getElementById('btnXuanzuo');
  if (buy !== null) {
    var Buytext = buy.innerHTML;
    if (Buytext == '立即购买' || Buytext == '立即预定') {
      grab_icket()
      return 1;
    } else {
      document.location.reload()
    }
  } else if (Xuanzuo !== null) {
    var Xuanzuotext = Xuanzuo.innerHTML;
    if (Xuanzuotext == '选座购买') {
      Xuanzuo.click()
      return 1;
    } else {
      document.location.reload()
    }
  } else {
    document.location.reload()
  }
}

function grab_icket() {
    var firstperform = document.getElementById('firstperform');
    firstperform.className = 'itm  itm-sel';
    var priceList = document.getElementById('priceList').childNodes;
    var children = priceList[3].childNodes[1].childNodes;
    console.log(children.length);
    for (var i = 0; i < children.length; i++) {
        if (children[i].getAttribute('data-priceid') == priceid) {
            console.log(children[i]);
            children[i].className = 'itm  itm-sel';
        }
    }

    var str = '<div class="ct" style=""><ul class="lst"><li class="itm" style="" data-performid=' + performid + ' data-priceid=' + priceid + '><span class="txt txt-datetime ">"2018-05-02 周三 19:30"</span><span class="txt txt-price">"980"</span><span class="m-nums"><a class="btn btn-low" href="javascript:;">减</a><input class="ipt ipt-num" type="text" value=' + person + '><a class="btn btn-add" href="javascript:;">加</a></span><span class="tips tips-stock"><strong></strong></span><a class="btn btn-del" href="javascript:;"><i></i>删除</a></li></ul></div><div class="ops"><a href="javascript:;" class="u-btn u-btn-c1 u-btn-choose" id="btnXuanzuo" style="">选座购买</a><a class="u-btn u-btn-buynow" href="javascript:;" id="btnBuyNow">立即购买</a></div>';
    document.getElementById('cartList').innerHTML = str;
    var bt = document.getElementById('buybtn');
    bt.click();
}