$(function () {
  //menu
  function checkCurrentGnb() {
    var _className = $('#wrap').attr('class'),
      _afterStr = _className ? _className.split(" ") : '',
      _gnbMenuLink = $('.nav > li');

    switch (_afterStr[0]) {
      case 'sub01_03_01':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(0).find('a').addClass('on');
        break;
      case 'sub01_04_01':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(0).find('a').addClass('on');
        break;
      case 'sub02_01_01':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(1).find('a').addClass('on');
        break;
      case 'sub02_02_01':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(1).find('a').addClass('on');
        break;
      case 'sub02_03_01':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(1).find('a').addClass('on');
        break;
      case 'sub03_01':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(2).find('a').addClass('on');
        break; 
      case 'sub03_02':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(2).find('a').addClass('on');
        break;
      case 'sub03_03':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(2).find('a').addClass('on');
        break;
      case 'sub03_04':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(2).find('a').addClass('on');
        break;
      case 'page04_01':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').addClass('on');
        _gnbMenuLink.eq(0).find('.depth2').find('li').eq(3).find('a').addClass('on');
        break;      
      case 'page06_01':
        _gnbMenuLink.eq(1).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(1).find('.depth2').addClass('on');
        _gnbMenuLink.eq(1).find('.depth2').find('li').eq(0).find('a').addClass('on');
        break;
      case 'page06_02':
        _gnbMenuLink.eq(1).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(1).find('.depth2').addClass('on');
        _gnbMenuLink.eq(1).find('.depth2').find('li').eq(1).find('a').addClass('on');
        break;
      case 'page06_03':
        _gnbMenuLink.eq(1).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(1).find('.depth2').addClass('on');
        _gnbMenuLink.eq(1).find('.depth2').find('li').eq(2).find('a').addClass('on');
        break;
      case 'page06_04':
        _gnbMenuLink.eq(1).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(1).find('.depth2').addClass('on');
        _gnbMenuLink.eq(1).find('.depth2').find('li').eq(3).find('a').addClass('on');
        break;
      case 'page10_01':
        _gnbMenuLink.eq(2).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(2).find('.depth2').addClass('on');
        _gnbMenuLink.eq(2).find('.depth2').find('li').eq(0).find('a').addClass('on');
        break;
      case 'page10_02':
        _gnbMenuLink.eq(2).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(2).find('.depth2').addClass('on');
        _gnbMenuLink.eq(2).find('.depth2').find('li').eq(1).find('a').addClass('on');
        break;
      case 'page12_01':
        _gnbMenuLink.eq(2).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(2).find('.depth2').addClass('on');
        _gnbMenuLink.eq(2).find('.depth2').find('li').eq(2).find('a').addClass('on');
        break;
      case 'page13_01':
        _gnbMenuLink.eq(3).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(3).find('.depth2').addClass('on');
        _gnbMenuLink.eq(3).find('.depth2').find('li').eq(0).find('a').addClass('on');
        break;
      case 'page14_01':
        _gnbMenuLink.eq(3).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(3).find('.depth2').addClass('on');
        _gnbMenuLink.eq(3).find('.depth2').find('li').eq(1).find('a').addClass('on');
        break;
      case 'page15_01':
        _gnbMenuLink.eq(3).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(3).find('.depth2').addClass('on');
        _gnbMenuLink.eq(3).find('.depth2').find('li').eq(2).find('a').addClass('on');
        break;
      case 'page17_01':
        _gnbMenuLink.eq(3).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(3).find('.depth2').addClass('on');
        _gnbMenuLink.eq(3).find('.depth2').find('li').eq(4).find('a').addClass('on');
        break;
      case 'page18_01':
        _gnbMenuLink.eq(3).find('> a').addClass('active');
        $('.nav-wrap').addClass('on');
        _gnbMenuLink.eq(3).find('.depth2').addClass('on');
        _gnbMenuLink.eq(3).find('.depth2').find('li').eq(5).find('a').addClass('on');
        break;
      case 'page16_01':
      _gnbMenuLink.eq(3).find('> a').addClass('active');
      $('.nav-wrap').addClass('on');
      _gnbMenuLink.eq(3).find('.depth2').addClass('on');
      _gnbMenuLink.eq(3).find('.depth2').find('li').eq(3).find('a').addClass('on');
        break;
    }
  }

  function menuUI() {
    let menuWrap = $('.nav');
    let menu = $('.nav li');
    let menuBtn = $('.nav > li > a');
    let _header = $('.header');
    let subMenu = $('.depth2')

    menuBtn.on('mouseover', function () {
      let _this = $(this);
      let _thisMenu = $(this).parents('li');

      $('.nav-wrap').addClass('on');
      _thisMenu.siblings('li').find('> a').removeClass('active')
      _this.addClass('active');
      _thisMenu.siblings('li').find(subMenu).removeClass('on');
      _this.next(subMenu).addClass('on');


    });

    _header.on('mouseleave', function () {
      $('.nav-wrap').removeClass('on');
      menuBtn.removeClass('active');
      subMenu.removeClass('on');
      checkCurrentGnb();
    })
  }

  $(document).on('ready', function () {
    checkCurrentGnb();
    menuUI();
  })


  // tab
  let tabBtn = $('.ui-tab-btn');


  function tabUI() {
    let _this = $(this);
    let _cnt = $(this).parents('.tab-wrap').find('.contents');
    let _idx = $(this).index();

    if(_this.parents('div').hasClass('contents') && !_this.parents('div').hasClass('content')) {
      console.log('bbb')
      if (!_this.hasClass('active')) {
        _this.siblings().removeClass('active');
        _this.addClass('active');
        _this.parents('.contents').find('.content').removeClass('on');
        _this.parents('.contents').find('.content').eq(_idx).addClass('on');
      }
    } else if(_this.parents('div').hasClass('content')) {
      console.log('aaa')
      if (!_this.hasClass('active')) {
        _this.siblings().removeClass('active');
        _this.addClass('active');
        
        _this.parents('.tab-wrap').eq(0).find('.content-last').removeClass('on');
        _this.parents('.tab-wrap').eq(0).find('.content-last').eq(_idx).addClass('on');
      }
    } else if(_this.parents('ul').hasClass('ui-tab-type02')){
      let _idx = $(this).data('idx');

      if (!_this.hasClass('active')) {
        _this.parents('li').siblings('li').find(tabBtn).removeClass('active');
        _this.siblings().removeClass('active');
        _this.addClass('active');
        _cnt.removeClass('on');
        _cnt.eq(_idx).addClass('on');
      }
    } else {
      if (!_this.hasClass('active')) {
        _this.siblings().removeClass('active');
        _this.addClass('active');
        _cnt.removeClass('on');
        _cnt.eq(_idx).addClass('on');
      }
    }
  }

  tabBtn.on('click', tabUI);

  // table drag
  $( "#table-1" ).sortable({
    handle: '.dragHandle',
  });
  $( "#table-1" ).disableSelection();

  // paging
  let pageBtn = $('.page');

  function pageFunc() {
    let _this = $(this);

    if (!_this.hasClass('active')) {
      pageBtn.removeClass('active');
      _this.addClass('active')
    }
  }

  pageBtn.on('click', pageFunc);


  // select
  let selectBtn = $('.select-btn');
  let selectCnt = $('.open-select-list li a')

  function selectUI() {
    let _this = $(this);
    let _cnt = $(this).next();

    if (!_this.hasClass('active')) {
      _this.addClass('active');
      _cnt.stop().slideDown('fast');
    } else {
      _cnt.stop().slideUp('fast', function () {
        _this.removeClass('active');
      })
    }

    if (_this.parents('ul').hasClass('open-select-list')) {
      selectCnt.removeClass('active');
      _this.addClass('active');
    }
  }

  selectBtn.on('click', selectUI);
  selectCnt.on('click', selectUI);


  //dot버튼 클릭시 open-select-list 열기

  let dotBtn = $('.btn-dot');

  $(function () {
    
    dotBtn.on('click', function () {
      let _this = $(this);
      let _position = _this.parents('span').position().top;
      
      console.log(this);

      if(!_this.hasClass('active')) {
        dotBtn.removeClass('active');
        _this.addClass('active');
        // _this.parents('.test').find('.btn-dot').removeClass('active');
        // _this.addClass('active');
      } else {
        _this.removeClass('active');
      }
      console.log(_position)
      if(_position > 710) {
        _this.find('.open-select-list').css('top', '-85px');
      }
    });




  });

  
  
  
  



  //북마크 버튼
  $(function () {
    $(".btn-book").click(function () {
      $(this).toggleClass("active");
    });
  });

  
  // button active
  let _btnMul = $('.btn-wrap.multi .btn-line');

  _btnMul.click(function(){
    $(this).toggleClass('active');
    btnClickFunc.return(false);
  });

  let _btn = $('.btn-wrap .btn-line');

  function btnClickFunc(){
    let _this = $(this);
    if(!_this.hasClass('active')) {
      _this.parents('.btn-wrap').find('.btn-line').removeClass('active');
      _this.addClass('active');
    };
  }

  _btn.on('click', btnClickFunc);

  // 유사 문항 버튼 active
  let _viewBtn = $('.view-que-list .btn-similar-que');

  function viewBtnClickFunc(){
    let _this = $(this);
    if(!_this.hasClass('active')) {
      _this.parents('.view-que-list').find('.btn-similar-que').removeClass('active');
      _this.addClass('active');
    };
  }

  _viewBtn.on('click', viewBtnClickFunc);


  // popup
  let _dim = $('.dim');
  let _html = $('html , body');
  let popBtn = $('.pop-btn');
  let closePop = $('.pop-close, .ui-close');

  function popFunc() {
    let _this = $(this);
    let popData = _this.data('pop');

    _html.css('overflow', 'hidden');
    _dim.fadeIn();

    $(".pop-wrap[data-pop='" + popData + "']").show();

    console.log($(".pop-wrap[data-pop='" + popData + "']"))
  }

  function popClose() {
    let _this = $(this);
    $('.pop-wrap').hide();
    _html.css('overflow', 'auto');
    _dim.fadeOut();
  }

  popBtn.on('click', popFunc);
  closePop.on('click', popClose);


  // checkbox
  let chkAll = $('.allCheck');
  let chkList = $('.left-cnt .chk-acc input[type="checkbox"]');
  let selectList = $('.right-cnt .chk-acc input[type="checkbox"]');

  function checkFunc() {
    let _this = $(this);


    if(_this.parents('div').hasClass('sheet-cnt')){
      let chkNum = _this.data('chk');

      if (_this.prop('checked')) {
        _this.parents('.chk-acc').find("input[data-chk='" + chkNum + "']").prop('checked', true);
      } else {
        _this.parents('.chk-acc').find("input[data-chk='" + chkNum + "']").prop('checked', false);
      }
    } else {
      if (_this.prop('checked')) {
        _this.parents('table').find('input[type=checkbox]').not('.toggle-btn input[type=checkbox]').prop('checked', true);
        _this.parents('.chk-acc').find('input[type=checkbox]').not('.toggle-btn input[type=checkbox]').prop('checked', true);
      } else {
        _this.parents('table').find('input[type=checkbox]').not('.toggle-btn input[type=checkbox]').prop('checked', false);
        _this.parents('.chk-acc').find('input[type=checkbox]').not('.toggle-btn input[type=checkbox]').prop('checked', false);
      }
    }
  }

  function checkMove() {
    let _this = $(this);
    let _idx = $(this).parents('.chk-acc').data('index');
    let selectCnt = $('.right-cnt .chk-acc');
    let _name = $(this).attr('name');

    if (_this.prop('checked')) {
      
      $(".right-cnt .chk-acc[data-index='" + _idx + "']").show();
      $(".right-cnt .chk-acc[data-index='" + _idx + "']").find(".allCheck").prop('checked', true);
      $(".right-cnt .chk-acc[data-index='" + _idx + "']").find('.cnt').show();
      _this.attr('disabled', true);
      selectCnt.find('.cnt').css('height','auto');
      if (_this.hasClass('allCheck')) {
        $(".right-cnt .chk-acc[data-index='" + _idx + "']").find('li').show();
        $(".right-cnt .chk-acc[data-index='" + _idx + "']").find('li').find('input').prop('checked', true);
        _this.parents('.chk-acc').find('input').attr('disabled', true);
        
      } else {
        selectCnt.find("input:checkbox[name='" + _name + "']").parents('li').show();
        selectCnt.find("input:checkbox[name='" + _name + "']").prop('checked', true);
      }
    }
  }

  function chkSelectFunc() {
    let _this = $(this);
    let chkCnt = $('.left-cnt .chk-acc');
    let _name = $(this).attr('name');
    let _idx = $(this).parents('.chk-acc').data('index');


    if (!_this.prop('checked')) {
      $(".left-cnt .chk-acc[data-index='" + _idx + "']").find(".allCheck").prop('checked', false);
      $(".left-cnt .chk-acc[data-index='" + _idx + "']").find(".allCheck").attr('disabled', false);

      if (_this.hasClass('allCheck')) {
        _this.parents('.chk-acc').hide();
        _this.parents('.chk-acc').find('li').hide();
        $(".left-cnt .chk-acc[data-index='" + _idx + "']").find('input').attr('disabled', false);
        $(".left-cnt .chk-acc[data-index='" + _idx + "']").find('input').prop('checked', false);
      } else {
        _this.parents('li').hide();
        chkCnt.find("input:checkbox[name='" + _name + "']").attr('disabled', false);
        chkCnt.find("input:checkbox[name='" + _name + "']").prop('checked', false);
      }
    }
  }

  chkAll.on('click', checkFunc);
  chkList.on('click', checkMove);
  selectList.on('click', chkSelectFunc)




  // accordion
  let accBtn = $('.acc-btn');
  let accBtn2 = $('.acc-btn-wrap > span , .acc-btn-wrap > em');


  function accFunc() {
    let _this = $(this);
    let accWrap = _this.parents('.acc-btn-wrap');   

    if(_this.parents('div').hasClass('acc-btn-wrap')){

      
      accWrap.toggleClass('active');

      if(accWrap.hasClass('active')) {
        _this.parents('.acc-btn-wrap').next('.cnt').stop().slideDown('fast');
      } else {
        _this.parents('.acc-btn-wrap').next('.cnt').stop().slideUp('fast');
      }

      if(accWrap.hasClass('on')) {
        accWrap.removeClass('on');
        accWrap.removeClass('active');
        _this.parents('.acc-btn-wrap').next('.cnt').stop().slideUp('fast');
      } 
    } else {
      _this.toggleClass('active');
      if (_this.hasClass('active')) {
        _this.next('.cnt').stop().slideDown('fast');
      } else {
        _this.next('.cnt').stop().slideUp('fast');
      }
    }
  }

  function accFunc2() {
    let _this = $(this);
    let accWrap = _this.parents('.acc-btn-wrap');
    
  
    accWrap.toggleClass('on');

    if(accWrap.hasClass('on')) {
      _this.parents('.acc-btn-wrap').next('.cnt').stop().slideDown('fast');
    } else {
      _this.parents('.acc-btn-wrap').next('.cnt').stop().slideUp('fast');
    }

    if(accWrap.hasClass('active')) {
      accWrap.removeClass('active');
      accWrap.removeClass('on');
      _this.parents('.acc-btn-wrap').next('.cnt').stop().slideUp('fast');
    } 
  }

  accBtn.on('click', accFunc);
  accBtn2.on('click', accFunc2);

  
  // 채점 팝업 슬라이드
  var swiper = new Swiper(".sheet-swiper .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      nextEl: ".sheet-swiper .swiper-button-next",
      prevEl: ".sheet-swiper .swiper-button-prev",
    },
  });

  // 형제 연결
  $('.cnt-list span').on('click', function(){
    let _this = $(this);
    let _txt = $(this).text();

    if(_this.parents('div').hasClass('box')){
      _this.parents('.box').find('.select-wrap .scroll-inner').append('<span class="select-stu">' + _txt + '<button type="button" class="del"></button></span>');
    } else if(_this.parents('div').hasClass('col')){
      _this.parents('.col').find('.select-wrap .scroll-inner').append('<span class="select-stu">' + _txt + '<button type="button" class="del"></button></span>');
    }

    
  })
  $(document).on('click', '.select-stu .del', function(){
    $(this).parents('.select-stu').remove();
  });

  // tablist 글자 숨김
  $('.cnt-btn').on('click', function(){
    let hiddenCnt = $(this).parents('.hidden-cnt');

    hiddenCnt.toggleClass('on');
  })

  // btn img
  $('.btn-icon.type02').on('mouseover', function(){
    $(this).find('i').addClass('hover');
  })
  $('.btn-icon.type02').on('mouseleave', function(){
    $(this).find('i').removeClass('hover');
  })
  
});