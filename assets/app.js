/* ─────────────────────────────────────────────────────────
   벤츠 홈페이지 공통 스크립트
   - 상단 바 · 전체 메뉴 · 바닥글 · 상담 카드는 여기서 모든 페이지에 똑같이 그린다(메뉴 고칠 곳 = MENU 한 군데)
   - 화면 칸(첫 화면 TOP 5 · 가격표 · 모델 비교 · 계산기 …)은 그 칸이 있는 페이지에서만 그린다
   - 숫자는 전부 assets/data.js 의 PRICE_ROWS · PRICE_LIST · MODEL_INFO 에서 계산
   ───────────────────────────────────────────────────────── */
(function(){
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function(id){ return document.getElementById(id); };
  var qs = new URLSearchParams(location.search);
  var HERE = (location.pathname.split("/").pop() || "index.html");

  /* ── 전체 메뉴 ─────────────────────────────────────── */
  var MENU = [
    { t:"이번 달 구매 조건", items:[
      ["promotion.html", MON + " 프로모션", "차종별 할인 · 최종가"],
      ["benefit.html", "구매 추가 혜택", "재구매 · 트레이드인 · 컨퀘스트"]
    ]},
    { t:"신차 · 모델", items:[
      ["models.html", "모델 비교", "차종 2~3개 나란히"],
      ["model.html?m=E-Class", "E-Class"],
      ["model.html?m=S-Class", "S-Class"],
      ["model.html?m=S-Class&t=mb580", "Maybach S-Class", "마이바흐 3트림"],
      ["model.html?m=GLC", "GLC"],
      ["model.html?m=GLE", "GLE"],
      ["models.html#all", "전 차종 모델 정보", MODEL_CARDS.length + "개 차종"]
    ]},
    { t:"상담 · 계산기", items:[
      ["quote.html", "견적 요청", "문자 · 카톡으로 바로"],
      ["test-drive.html", "시승 예약", "인천전시장"],
      ["finance.html", "할부 계산기", "월 납입금 · 이자"]
    ]},
    { t:"홍창기 차장", items:[
      ["index.html#reviews", "고객 후기 · 채널"],
      ["index.html#location", "인천전시장 오시는 길"]
    ]}
  ];
  var TOPLINKS = [
    ["promotion.html", MON + " 프로모션"], ["benefit.html", "추가 혜택"], ["models.html", "모델 비교"],
    ["finance.html", "할부 계산기"], ["quote.html", "견적 요청"]
  ];
  function isHere(href){
    var file = href.split("#")[0].split("?")[0];
    if (file !== HERE || href.indexOf("#") >= 0) return false;
    var m = (href.split("?")[1] || "").match(/m=([^&]+)/);
    return !m || decodeURIComponent(m[1]) === qs.get("m");
  }
  var YT_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>';
  var YT = "https://www.youtube.com/@별주행벤츠";

  (function chrome(){
    var nav = $("nav");
    if (nav) nav.innerHTML =
      '<div class="wrap nav__in">' +
        '<a class="brand" href="index.html" aria-label="별주행 벤츠 홍창기 차장 — 첫 화면">' +
          '<span class="brand__mark">별주행<i>벤츠</i></span>' +
          '<span class="brand__sub">메르세데스-벤츠 공식딜러 한성자동차<br><b>인천전시장 홍창기 차장</b></span></a>' +
        '<div class="nav__links">' + TOPLINKS.map(function(l){
          return '<a href="' + l[0] + '"' + (isHere(l[0]) ? ' class="is-active" aria-current="page"' : '') + '>' + l[1] + '</a>';
        }).join("") + '</div>' +
        '<div class="nav__right">' +
          '<a class="yt" href="' + YT + '" target="_blank" rel="noopener" aria-label="유튜브 별주행 벤츠 구독">' + YT_SVG + '구독</a>' +
          '<a class="btn btn--kakao btn--sm" href="' + KAKAO + '" target="_blank" rel="noopener">카카오톡 상담</a>' +
          '<button class="burger" type="button" id="burger" aria-label="전체 메뉴 열기" aria-controls="drawer" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '</div></div>';

    /* 「이 페이지 바로가기」는 메뉴를 열 때 채운다(차종 페이지처럼 나중에 그려지는 섹션도 잡히게) */
    var groups = '<div class="dgrp dgrp--toc" id="dtoc" hidden></div>' +
      MENU.map(function(g){
        return '<div class="dgrp"><p class="dgrp__t">' + g.t + '</p>' + g.items.map(function(it){
          return '<a href="' + it[0] + '"' + (isHere(it[0]) ? ' class="is-here" aria-current="page"' : '') + ' data-close>' +
            it[1] + (it[2] ? '<small>' + it[2] + '</small>' : '') + '</a>';
        }).join("") + '</div>';
      }).join("");

    var box = document.createElement("div");
    box.innerHTML =
      '<div class="drawer" id="drawer" aria-hidden="true">' +
        '<div class="drawer__bg" data-close></div>' +
        '<div class="drawer__panel" role="dialog" aria-label="전체 메뉴">' +
          '<div class="drawer__brand"><a class="brand__mark" href="index.html">별주행<i>벤츠</i></a>' +
          '<button class="drawer__x" type="button" data-close aria-label="메뉴 닫기">&#10005;</button></div>' +
          '<nav>' + groups + '</nav>' +
          '<div class="drawer__who">한성자동차 인천전시장<b>홍창기 차장</b><a class="drawer__tel" href="tel:' + TEL + '">' + TEL_TXT + '</a></div>' +
          '<a class="btn btn--kakao" href="' + KAKAO + '" target="_blank" rel="noopener">카카오톡 1:1 상담</a>' +
        '</div></div>' +
      '<footer class="foot"><div class="wrap">' +
        '<p class="foot__nm">홍창기 차장<span>| Hong Chang Ki</span></p>' +
        '<div class="foot__grid"><div>Sales Consultant · 한성자동차 인천전시장<br>메르세데스-벤츠 공식딜러<br>인천광역시 남동구 인주대로 651</div>' +
        '<div>M ' + TEL_TXT + '<br>카카오톡 ID hck0328<br>유튜브 · 별주행 벤츠</div></div>' +
        '<div class="foot__links">' +
          '<a href="tel:' + TEL + '">' + TEL_TXT + '</a>' +
          '<a href="' + KAKAO + '" target="_blank" rel="noopener">카카오톡</a>' +
          '<a href="' + YT + '" target="_blank" rel="noopener">YouTube</a>' +
          '<a href="https://www.instagram.com/getbenzck/" target="_blank" rel="noopener">Instagram</a>' +
          '<a href="https://blog.naver.com/benz-ck" target="_blank" rel="noopener">네이버 블로그</a>' +
          '<a href="https://hoohoopro.blogspot.com" target="_blank" rel="noopener">구글 블로그</a>' +
          '<a href="https://new.smartplace.naver.com/bizes/booking/1083906/reviews?menu=visitor" target="_blank" rel="noopener">네이버 리뷰</a>' +
        '</div>' +
        '<p>본 페이지는 메르세데스-벤츠 공식딜러 한성자동차 인천전시장 소속 세일즈 컨설턴트 홍창기의 개인 상담 안내 페이지입니다. ' +
        '표기된 혜택과 금융 조건은 모델 · 재고 · 계약 시점에 따라 변동되며, 계산 결과는 참고용입니다. 최종 조건은 상담 시 안내드립니다.</p>' +
      '</div></footer>' +
      '<aside class="float" id="float" aria-label="상담 연락처">' +
        '<button class="float__x" type="button" id="floatX" aria-label="상담 카드 닫기">&#10005;</button>' +
        '<p class="float__k">메르세데스-벤츠 한성자동차 인천전시장</p><p class="float__n">홍창기 차장</p>' +
        '<a class="float__t" href="tel:' + TEL + '">' + TEL_TXT + '</a>' +
        '<a class="btn btn--kakao" href="' + KAKAO + '" target="_blank" rel="noopener">카카오톡 상담</a></aside>' +
      '<div class="callbar"><a class="btn btn--line" href="tel:' + TEL + '">전화 상담</a>' +
        '<a class="btn btn--kakao" href="' + KAKAO + '" target="_blank" rel="noopener">카카오톡 상담</a></div>' +
      '<div class="toast" id="toast" role="status"></div>';
    while (box.firstChild) document.body.appendChild(box.firstChild);
  })();

  /* 「○월」은 표에 실린 자료의 달을 따른다(달력상 이번 달이 아니라 PRICE_MONTH) */
  document.querySelectorAll(".js-month").forEach(function(el){ el.textContent = MON; });

  function toast(t){
    var el = $("toast"); if (!el) return;
    el.textContent = t; el.classList.add("on");
    clearTimeout(toast.t); toast.t = setTimeout(function(){ el.classList.remove("on"); }, 3200);
  }

  /* ── 전체 메뉴 열고 닫기 ────────────────────────────── */
  (function drawer(){
    var d = $("drawer"), b = $("burger");
    if (!d || !b) return;
    d.inert = true;
    function set(open){
      d.classList.toggle("is-open", open);
      d.setAttribute("aria-hidden", String(!open));
      d.inert = !open;
      b.setAttribute("aria-expanded", String(open));
      document.documentElement.style.overflow = open ? "hidden" : "";
      if (open) {
        var toc = [].slice.call(document.querySelectorAll("[data-toc][id]")).map(function(s){
          return '<a href="#' + s.id + '" data-close>' + esc(s.getAttribute("data-toc")) + '</a>';
        }).join("");
        var box = $("dtoc");
        box.innerHTML = toc ? '<p class="dgrp__t">이 페이지 바로가기</p>' + toc : "";
        box.hidden = !toc;
        d.querySelector(".drawer__x").focus();
      }
    }
    b.addEventListener("click", function(){ set(true); });
    d.addEventListener("click", function(e){ if (e.target.closest("[data-close]")) set(false); });
    document.addEventListener("keydown", function(e){
      if (e.key === "Escape" && d.classList.contains("is-open")) { set(false); b.focus(); }
    });
  })();

  /* ── 떠 있는 상담 카드 — 닫으면 이 창에서는 다시 안 뜬다 ── */
  (function floatCard(){
    var f = $("float"), x = $("floatX");
    if (!f || !x) return;
    try { if (sessionStorage.getItem("floatHidden") === "1") f.classList.add("is-hidden"); } catch (e) {}
    x.addEventListener("click", function(){
      f.classList.add("is-hidden");
      try { sessionStorage.setItem("floatHidden", "1"); } catch (e) {}
    });
  })();

  /* ── 기준 월이 지나면 알린다 ────────────────────────── */
  (function flagIfStale(){
    var band = $("pricestale"), text = $("pricestaletext");
    if (!band || !text) return;
    var now = new Date();
    var elapsed = (now.getFullYear() - PRICE_YEAR) * 12 + (now.getMonth() + 1 - PRICE_MONTH);
    if (elapsed <= 0) return;
    text.textContent = "아래 조건은 " + PRICE_ASOF + "입니다. 구매 혜택은 매월 바뀌므로 " +
      (now.getMonth() + 1) + "월 조건은 카카오톡이나 전화로 문의해 주세요.";
    band.classList.add("on");
  })();

  /* ═════════════ 첫 화면 ═════════════ */

  /* 「이번 달 총할인 TOP 5」 — 총 할인율(현금+할부+재구매+트레이드인) 순, 같으면 할인 금액 순. 가격 문의 행은 제외 */
  var DEALS = (function(){
    var pinned = PRICE_ROWS.filter(function(r){ return DEALS_PIN.indexOf(key(r)) >= 0; });
    var auto = PRICE_ROWS.filter(function(r){
        return r.msrp !== null && tot(r) > 0 && DEALS_SKIP.indexOf(key(r)) < 0 && DEALS_PIN.indexOf(key(r)) < 0; })
      .sort(byDeal).slice(0, Math.max(0, 5 - pinned.length));
    return auto.concat(pinned);
  })();

  /* 첫 화면 TOP 5 가 6.5초마다 넘어간다. 마우스를 올리면 멈춘다 */
  (function heroDeals(){
    var deal = $("deal"), body = $("dealBody"), tabs = $("dealTabs"), cta = $("dealCta");
    if (!deal) return;
    if (!DEALS.length) { deal.hidden = true; return; }
    var DUR = 6500, i = 0, timer = null, paused = false;
    tabs.style.setProperty("--dur", DUR + "ms");
    tabs.innerHTML = DEALS.map(function(r, n){
      return '<button class="dealtab" type="button" role="tab" aria-selected="false" data-i="' + n + '">' +
        '<span>' + esc(r.trim) + '</span><b>' + tot(r) + '%</b><i></i></button>';
    }).join("");
    function fill(r){
      var has = r.msrp !== null, from = r.from ? " 부터" : "";
      $("dealBadge").textContent = "총 " + tot(r) + "% 할인";
      $("dealBadgeSub").textContent = "현금 · 할부 · 재구매 · 트레이드인 모두 적용 시";
      $("dealKicker").textContent = PRICE_YEAR + "년 " + MON + " · " + r.trim + " (" + r.year + "년식)";
      $("dealAmt").textContent = has ? won.format(cutOf(r)) + "만원" : tot(r) + "%";
      $("dealMsrp").textContent = has ? manStr(r.msrp) + from : "가격 문의";
      $("dealBestK").textContent = MON + " 최대 할인가";
      $("dealBest").textContent = has ? manStr(maxOf(r)) + from : "가격 문의";
      $("dealMix").textContent = mixOf(r);
      if (cta) cta.href = "quote.html?k=" + encodeURIComponent(key(r));
    }
    function restartBar(b){
      var bar = b && b.querySelector("i");
      if (!bar) return;
      bar.style.animation = "none"; void bar.offsetWidth; bar.style.animation = "";
    }
    function schedule(){
      clearTimeout(timer);
      if (paused || reduce || DEALS.length < 2) return;
      timer = setTimeout(function(){ show(i + 1, true); }, DUR);
    }
    function show(n, animate){
      i = (n + DEALS.length) % DEALS.length;
      [].forEach.call(tabs.children, function(b, k){
        var on = k === i;
        b.classList.toggle("on", on);
        b.setAttribute("aria-selected", String(on));
        if (on) restartBar(b);
      });
      if (animate && !reduce) {
        body.classList.add("swap");
        setTimeout(function(){ fill(DEALS[i]); body.classList.remove("swap"); }, 280);
      } else fill(DEALS[i]);
      schedule();
    }
    tabs.addEventListener("click", function(e){
      var b = e.target.closest(".dealtab"); if (!b) return;
      show(+b.dataset.i, true);
    });
    function pause(){ paused = true; clearTimeout(timer); deal.classList.add("paused"); }
    function resume(){ paused = false; deal.classList.remove("paused"); restartBar(tabs.children[i]); schedule(); }
    deal.addEventListener("mouseenter", pause);
    deal.addEventListener("mouseleave", resume);
    deal.addEventListener("focusin", pause);
    deal.addEventListener("focusout", function(e){ if (!deal.contains(e.relatedTarget)) resume(); });
    show(0, false);
  })();

  /* 사진이 천천히 확대되며 넘어가는 배경 — 첫 화면(인천전시장 실차)과 차종 페이지(카탈로그)가 같이 쓴다 */
  function startKb(kb, srcs){
    if (!kb || !srcs.length) return;
    var moves = [["-2%","-1%"],["2%","-2%"],["-1%","2%"],["0%","-2%"],["2%","1%"]];
    kb.innerHTML = srcs.map(function(src, n){
      var m = moves[n % moves.length];
      return '<div class="kb__s" style="background-image:url(\'' + src + '\');--tx:' + m[0] + ';--ty:' + m[1] + '"></div>';
    }).join("");
    var slides = kb.children, k = 0;
    slides[0].classList.add("on");
    if (reduce || slides.length < 2) return;
    setInterval(function(){
      var prev = slides[k];
      k = (k + 1) % slides.length;
      var cur = slides[k];
      prev.classList.remove("on"); prev.classList.add("off");
      cur.classList.remove("off");
      cur.style.animation = "none"; void cur.offsetWidth; cur.style.animation = "";
      cur.classList.add("on");
    }, 7000);
  }
  startKb($("kb"), SHOTS.map(function(s){ return s.src; }));

  /* 실차 사진 */
  function shotsHTML(){
    return SHOTS.map(function(s){
      return '<figure class="shot"><img src="' + s.src + '" alt="' + s.title + ' — ' + s.note + '" loading="lazy">' +
        '<figcaption>' + s.title + '<em>' + s.note + '</em></figcaption></figure>';
    }).join("");
  }
  (function renderShots(){
    var wrap = $("shots"), note = $("shotsnote");
    if (!wrap) return;
    wrap.innerHTML = shotsHTML();
    if (note) note.textContent = SHOTS_NOTE;
  })();

  /* 꼭 체크할 4가지 */
  (function renderCheck(){
    var el = $("check4");
    var priced = PRICE_ROWS.filter(function(r){ return r.msrp !== null && tot(r) > 0; });
    if (!el || !priced.length) return;
    var topPct = priced.slice().sort(byDeal)[0];
    var topWon = priced.slice().sort(function(a, b){ return cutOf(b) - cutOf(a); })[0];
    var mbmRows = PRICE_ROWS.filter(function(r){ return r.fin > r.cash; });
    var mbmMax = Math.max.apply(null, mbmRows.map(function(r){ return r.fin - r.cash; }).concat([0]));
    var conqRows = PRICE_ROWS.filter(function(r){ return r.conq; });
    var conqMax = Math.max.apply(null, conqRows.map(function(r){ return r.conq; }).concat([0]));
    var cards = [
      { c:"a", tag:"최대 할인율", big: tot(topPct) + "<small>%</small>",
        t: esc(topPct.trim) + " " + yb(topPct),
        d: manStr(topPct.msrp) + "짜리가 " + manStr(maxOf(topPct)) + (topPct.from ? " 부터" : "") + ". " + mixOf(topPct) + " 모두 적용 시",
        go: "어떤 차가 " + tot(topPct) + "%일까?", q: topPct.trim, hit: key(topPct) },
      { c:"b", tag:"최대 할인 금액", big: "−" + won.format(cutOf(topWon)) + "<small>만원</small>",
        t: esc(topWon.trim) + " " + yb(topWon),
        d: manStr(topWon.msrp) + " → " + manStr(maxOf(topWon)) + (topWon.from ? " 부터" : "") + ". 금액으로는 이 차가 가장 많이 내려갑니다.",
        go: "가장 많이 깎이는 차는?", q: topWon.trim, hit: key(topWon) }
    ];
    if (mbmMax) cards.push({ c:"c", tag:"할부 추가 할인", big: "+" + mbmMax + "<small>%p</small>",
      t: "현금 할인에 벤츠 금융 할부를 더하면",
      d: mbmRows.length + "개 트림이 MBM 할부 이용 시 현금 할인보다 최대 " + mbmMax + "%p 더 내려갑니다.",
      go: "할부 할인 차량 보기", tab: "mbm" });
    if (conqMax) {
      var byPct = {};
      conqRows.forEach(function(r){ var f = famOf(r); byPct[r.conq] = byPct[r.conq] || []; if (byPct[r.conq].indexOf(f) < 0) byPct[r.conq].push(f); });
      var who = Object.keys(byPct).sort(function(a, b){ return b - a; }).map(function(p){ return byPct[p].join("·") + " +" + p + "%"; }).join(", ");
      cards.push({ c:"d", tag:"타 브랜드 고객", big: "+" + conqMax + "<small>%</small>",
        t: "BMW·아우디·제네시스 등을 타고 계시면",
        d: "컨퀘스트 추가 할인 — " + who + ". 재구매 할인과는 둘 중 하나만 받습니다.",
        go: "누가 받을 수 있을까?", tab: "conq" });
    }
    el.innerHTML = cards.map(function(k, n){
      return '<article class="ck ck--' + k.c + '"><p class="ck__tag"><b>' + ("0" + (n + 1)) + '</b>' + k.tag + '</p>' +
        '<p class="ck__big num">' + k.big + '</p><p class="ck__t">' + k.t + '</p><p class="ck__d">' + k.d + '</p>' +
        '<span class="ck__spacer"></span><button class="ck__go" type="button" data-n="' + n + '">' + k.go + ' →</button></article>';
    }).join("");
    el.addEventListener("click", function(e){
      var b = e.target.closest(".ck__go"); if (!b) return;
      var k = cards[+b.dataset.n];
      openFinder({ q: k.q, tab: k.tab, hit: k.hit });
    });
    var plus = $("mouPlus");
    var rets = PRICE_ROWS.map(function(r){ return r.ret; }).filter(function(v){ return v > 0; });
    if (plus && rets.length) {
      var lo = Math.min.apply(null, rets), hi = Math.max.apply(null, rets);
      plus.innerHTML = '<b class="num">+' + (lo === hi ? lo : lo + '~' + hi) + '<small>%</small></b>' +
        '<span>재구매 고객 추가 할인</span><em>벤츠 보유 고객 · 차종별로 다름</em>';
    } else if (plus) plus.hidden = true;
  })();

  /* 판매조건 한눈에 — 현금 / 할부 / 재구매·트레이드인 */
  (function renderConditions(){
    var el = $("cond3");
    if (!el) return;
    var p = PRICE_ROWS.filter(function(r){ return r.msrp !== null; });
    var cashRows = p.filter(function(r){ return r.cash > 0; })
      .sort(function(a, b){ return (b.cash - a.cash) || (b.msrp * b.cash - a.msrp * a.cash); });
    var mbmRows = p.filter(function(r){ return r.fin > r.cash; })
      .sort(function(a, b){ return (b.fin - a.fin) || ((b.fin - b.cash) - (a.fin - a.cash)) || (b.msrp - a.msrp); });
    var plusRows = p.filter(function(r){ return r.ret + r.trade > 0; })
      .sort(function(a, b){ return ((b.ret + b.trade) - (a.ret + a.trade)) || (b.msrp - a.msrp); });
    var gaps = mbmRows.map(function(r){ return r.fin - r.cash; });
    var gLo = Math.min.apply(null, gaps), gHi = Math.max.apply(null, gaps);
    var plusHi = Math.max.apply(null, plusRows.map(function(r){ return r.ret + r.trade; }).concat([0]));
    function row(r, pct, small, meta){
      return '<button class="cc__row" type="button" data-q="' + esc(r.trim) + '" data-hit="' + esc(key(r)) + '">' +
        '<span class="cc__n">' + esc(r.trim) + ' ' + yb(r) + '</span>' +
        '<span class="cc__p num">' + pct + '<small>' + small + '</small></span>' +
        '<span class="cc__m num">' + meta + '</span></button>';
    }
    var cols = [];
    if (cashRows.length) cols.push('<article class="cc cc--cash">' +
      '<p class="cc__k">기본 현금 할인</p><p class="cc__s">차 값에서 바로 · 금융 무관</p><span class="cc__tag">기본 혜택</span>' +
      '<p class="cc__big num"><small>최대</small>' + cashRows[0].cash + '%</p>' +
      '<p class="cc__d">현금으로 사셔도, 다른 금융을 쓰셔도 <b>똑같이 적용</b>되는 기본 할인입니다.</p>' +
      '<div class="cc__list">' + cashRows.slice(0, 6).map(function(r){
        return row(r, r.cash + "%", "현금", '<s>' + won.format(man(r.msrp)) + '</s> → <b>' + manStr(Math.round(r.msrp * (1 - r.cash / 100))) + '</b>');
      }).join("") + '</div>' +
      '<button class="cc__more" type="button" data-tab="disc">할인 차량 ' + cashRows.length + '개 전체 보기 →</button></article>');
    if (mbmRows.length) cols.push('<article class="cc cc--mbm">' +
      '<p class="cc__k">벤츠파이낸셜 할부 (MBM)</p><p class="cc__s">할부 · 벤츠 금융 이용 시</p><span class="cc__tag">+ 추가 할인</span>' +
      '<p class="cc__big num">+' + (gLo === gHi ? gHi : gLo + '~' + gHi) + '%p</p>' +
      '<p class="cc__d">현금 할인 위에 <b>MBM 할부 특별 할인</b>이 더 얹힙니다. 아래는 현금 + 할부를 합친 할인율입니다.</p>' +
      '<div class="cc__list">' + mbmRows.slice(0, 6).map(function(r){
        return row(r, r.fin + "%", "현금 " + r.cash + " + 할부 " + (r.fin - r.cash), '<s>' + won.format(man(r.msrp)) + '</s> → <b>' + manStr(bestOf(r)) + '</b>' + (r.from ? ' 부터' : ''));
      }).join("") + '</div>' +
      '<button class="cc__more" type="button" data-tab="mbm">할부 할인 차량 ' + mbmRows.length + '개 전체 보기 →</button></article>');
    if (plusRows.length) cols.push('<article class="cc cc--plus">' +
      '<p class="cc__k">재구매 · 트레이드인</p><p class="cc__s">벤츠 보유 · 타던 차 매각 시</p><span class="cc__tag">+ 해당되면 더</span>' +
      '<p class="cc__big num"><small>최대</small>+' + plusHi + '%</p>' +
      '<p class="cc__d">벤츠를 타고 계시면 <b>재구매</b>, 타던 차를 넘기시면 <b>트레이드인</b> 할인이 위 조건에 더해집니다. 다른 프리미엄 브랜드를 타시면 컨퀘스트도 있습니다.</p>' +
      '<div class="cc__list">' + plusRows.slice(0, 6).map(function(r){
        return row(r, "+" + (r.ret + r.trade) + "%", "재구매 " + r.ret + " + 트레이드인 " + r.trade, '최대 할인가 <b>' + manStr(maxOf(r)) + '</b>' + (r.from ? ' 부터' : ''));
      }).join("") + '</div>' +
      '<a class="cc__more" href="benefit.html">재구매 · 트레이드인 자세히 →</a></article>');
    el.innerHTML = cols.join("");
    el.addEventListener("click", function(e){
      var r = e.target.closest(".cc__row");
      if (r) return openFinder({ q: r.dataset.q, hit: r.dataset.hit });
      var m = e.target.closest("button.cc__more");
      if (m) openFinder({ tab: m.dataset.tab });
    });
  })();

  /* ═════════════ 가격표 (내 차 찾아보기) ═════════════ */

  /* 검색어 별칭 — 한글로 쳐도 찾게 */
  var FAM_KO = {
    "A-Class":"a클래스 에이클래스", "CLA":"씨엘에이", "C-Class":"c클래스 씨클래스", "E-Class":"e클래스 이클래스",
    "S-Class":"s클래스 에스클래스", "Maybach":"마이바흐", "CLE":"씨엘이 쿠페 카브리올레", "AMG GT · SL":"지티 에스엘",
    "GLA":"지엘에이", "GLB":"지엘비", "GLC":"지엘씨", "GLE":"지엘이", "GLS":"지엘에스",
    "G-Class":"g클래스 지클래스 지바겐 g바겐", "V-Class":"v클래스 브이클래스", "EQA":"전기", "EQB":"전기", "EQE":"전기", "EQS":"전기"
  };
  function norm(s){ return String(s).toLowerCase().replace(/[\s·\-_.()]/g, ""); }
  var HAY = PRICE_ROWS.map(function(r){
    var f = famOf(r);
    return norm([r.trim, r.model, f, FAM_KO[f] || "", r.seg === "ev" ? "전기 ev electric" : "",
      r.seg === "amg" ? "amg 에이엠지" : "", r.memo || "", r.year + "년식"].join(" "));
  });
  var TABS = [
    ["all",  "전체",           function(){ return true; }],
    ["y27",  "27년식",         function(r){ return r.year === 27; }],
    ["y26",  "26년식",         function(r){ return r.year === 26; }],
    ["disc", "할인 있는 차",    function(r){ return tot(r) > 0; }],
    ["mbm",  "할부 추가 할인",  function(r){ return r.fin > r.cash; }],
    ["conq", "타 브랜드 추가",  function(r){ return !!r.conq; }],
    ["ew",   "보증연장",        function(r){ return !!r.ew; }]
  ];
  var HEAD = '<div class="fr fr--head" aria-hidden="true">' +
    '<span>모델 · 트림 <small class="fr__unit">금액 단위 만원</small></span><span>차량가</span>' +
    '<span class="h-cash">현금</span><span class="h-mbm">할부</span><span>할인 합계</span><span>할인 적용가</span>' +
    '<span class="extra">재구매·트레이드인</span><span class="h-max">최대 할인가</span><span></span></div>';

  function rowHTML(r, hit){
    var has = r.msrp !== null, t = tot(r), from = r.from ? '<i>부터</i>' : '', z = '<span class="z">—</span>';
    var sub = famOf(r), mm = r.model.replace("Mercedes-", "");
    if (mm !== sub) sub += " · " + mm;
    var perks = [];
    if (r.memo) perks.push('<span class="perk perk--memo">' + esc(r.memo) + '</span>');
    if (r.conq) perks.push('<span class="perk perk--conq">타 브랜드 +' + r.conq + '%</span>');
    if (r.ew) perks.push('<span class="perk perk--ew">' + esc((EW_LABEL[r.ew] || "보증연장").replace(/^\+ /, "")) + '</span>');
    /* 휴대폰 한 줄 요약 */
    var m = has
      ? (r.fin > 0 ? '<s>' + manStr(r.msrp) + '</s>' : '<span>' + manStr(r.msrp) + (r.from ? ' 부터' : '') + '</span>') +
        (r.fin > 0
          ? ' <span class="arrow">→</span> <span class="best">' + manStr(bestOf(r)) + (r.from ? ' 부터' : '') + '</span> <span class="sum">' + r.fin + '%</span>' +
            ' <span>(<span class="cash">현금 ' + r.cash + '</span>' + (r.fin > r.cash ? ' + <span class="mbm">할부 ' + (r.fin - r.cash) + '</span>' : '') + ')</span>'
          : ' <span>기본 할인 없음</span>') +
        (r.ret || r.trade ? ' <span>재구매 +' + r.ret + ' · 트레이드인 +' + r.trade + '</span>' : '')
      : '<span>가격 문의</span>' + (t ? ' <span class="sum">총 ' + t + '%</span>' : '');
    return '<div class="fr y' + r.year + (t === 0 ? ' is-dim' : '') + (hit === key(r) ? ' is-hit' : '') + '" data-k="' + esc(key(r)) + '">' +
      '<div class="fr__name"><b>' + esc(r.trim) + yb(r) + '</b><span class="fr__sub">' + esc(sub) + '</span>' +
        (perks.length ? '<span class="fr__perks">' + perks.join("") + '</span>' : '') + '</div>' +
      '<span class="fr__c msrp">' + (has ? won.format(man(r.msrp)) + from : '<span class="z">문의</span>') + '</span>' +
      '<span class="fr__c cash">' + (r.cash ? r.cash + '%' : z) + '</span>' +
      '<span class="fr__c mbm">' + (r.fin > r.cash ? '+' + (r.fin - r.cash) + '%' : z) + '</span>' +
      '<span class="fr__c sum">' + (r.fin ? r.fin + '%' : z) + '</span>' +
      '<span class="fr__c best">' + (has ? won.format(man(bestOf(r))) + from : z) + '</span>' +
      '<span class="fr__c extra">' + (r.ret || r.trade ? '+' + r.ret + ' · +' + r.trade + '%' : z) + '</span>' +
      '<span class="fr__c max">' + (has ? won.format(man(maxOf(r))) + '<i class="u">만원</i>' + from : z) + '</span>' +
      '<a class="fr__go" href="quote.html?k=' + encodeURIComponent(key(r)) + '">견적 →</a>' +
      '<div class="fr__m num">' + m + '</div></div>';
  }
  function famStats(f, rows){
    var rs = rows.filter(function(r){ return famOf(r) === f; });
    var pr = rs.filter(function(r){ return r.msrp !== null; });
    return { rs: rs, best: Math.max.apply(null, rs.map(tot)),
             minMax: pr.length ? Math.min.apply(null, pr.map(maxOf)) : null };
  }
  function sortBase(rows){
    var fo = function(r){ var i = FAM_ORDER.indexOf(famOf(r)); return i < 0 ? 99 : i; };
    var pm = function(r){ return r.msrp === null ? Infinity : r.msrp; };
    return rows.slice().sort(function(a, b){ return (fo(a) - fo(b)) || (b.year - a.year) || (pm(a) - pm(b)); });
  }
  var EMPTY = '<p class="fempty">조건에 맞는 차량이 없습니다. 검색어를 바꾸시거나 카카오톡으로 물어봐 주세요.</p>';

  /* 기본은 차종별로 접어서(10-02 「한눈에 보기 어렵대」) — 검색·조건을 고르면 해당 차종이 펼쳐진다 */
  var F = { q:"", tab:"all", fam:"all", sort:"base", view:"groups", hit:null };
  var openGroups = {};
  var flist = $("flist"), groupsEl = $("pricegroups");

  function tabFn(id){
    for (var i = 0; i < TABS.length; i++) if (TABS[i][0] === id) return TABS[i][2];
    return TABS[0][2];
  }
  function rowsNow(){
    var q = norm(F.q), fn = tabFn(F.tab), out = [];
    PRICE_ROWS.forEach(function(r, n){
      if (!fn(r)) return;
      if (F.fam !== "all" && famOf(r) !== F.fam) return;
      if (q && HAY[n].indexOf(q) < 0) return;
      out.push(r);
    });
    var pm = function(r){ return r.msrp === null ? Infinity : r.msrp; };
    if (F.sort === "pct") return out.sort(function(a, b){ return (tot(b) - tot(a)) || ((b.msrp || 0) * tot(b) - (a.msrp || 0) * tot(a)); });
    if (F.sort === "price") return out.sort(function(a, b){ return pm(a) - pm(b); });
    return sortBase(out);
  }
  function renderFinder(){
    if (!flist) return;
    var rows = rowsNow(), cnt = $("fcount");
    if (cnt) cnt.innerHTML = '<b>' + rows.length + '</b>개 트림 · ' + PRICE_ASOF + ' · 부가세 포함 권장 소비자가';
    flist.hidden = F.view !== "list";
    groupsEl.hidden = F.view !== "groups";
    if (F.view === "list") {
      var html = "", last = null;
      rows.forEach(function(r){
        if (F.sort === "base") {
          var f = famOf(r);
          if (f !== last) {
            last = f;
            var s = famStats(f, rows);
            html += '<div class="fgrp"><b>' + esc(f) + '</b><span>' + s.rs.length + '개 트림' +
              (s.best > 0 ? ' · 최대 <em>' + s.best + '%</em>' : '') + (s.minMax ? ' · ' + manStr(s.minMax) + '부터' : '') + '</span></div>';
          }
        }
        html += rowHTML(r, F.hit);
      });
      flist.innerHTML = rows.length ? HEAD + html : EMPTY;
      return;
    }
    /* 차종별 보기 — 카드 제목엔 그 차종의 최고 조건만, 누르면 트림이 펼쳐진다 */
    var order = [], filtered = !!(F.q || F.tab !== "all" || F.fam !== "all");
    rows.forEach(function(r){ var g = famOf(r); if (order.indexOf(g) < 0) order.push(g); });
    groupsEl.innerHTML = order.map(function(g){
      var s = famStats(g, rows), open = !!openGroups[g] || filtered;
      var years = s.rs.map(function(r){ return r.year; }).filter(function(v, i, a){ return a.indexOf(v) === i; }).sort().reverse();
      return '<div class="pg' + (open ? ' is-open' : '') + '">' +
        '<button class="pg__head" type="button" aria-expanded="' + open + '" data-g="' + esc(g) + '">' +
          '<span class="pg__name">' + esc(g) + '</span>' +
          '<span class="pg__years">' + years.map(function(y){ return '<span class="yb y' + y + '">' + y + '</span>'; }).join("") + '</span>' +
          '<span class="pg__best">' + (s.best > 0 ? '최대 <b>' + s.best + '%</b>' : '') + (s.minMax ? ' · <em>' + manStr(s.minMax) + '부터</em>' : '') + '</span>' +
          '<span class="pg__n">' + s.rs.length + '개 트림</span><span class="pg__chev" aria-hidden="true"></span>' +
        '</button>' +
        '<div class="pg__list"' + (open ? '' : ' hidden') + '>' + HEAD + s.rs.map(function(r){ return rowHTML(r, F.hit); }).join("") + '</div></div>';
    }).join("") || EMPTY;
  }
  function press(box, attr, val){
    if (!box) return;
    [].forEach.call(box.querySelectorAll("[data-" + attr + "]"), function(b){ b.setAttribute("aria-pressed", String(b.dataset[attr] === val)); });
  }
  function syncUI(){
    press($("ftabs"), "tab", F.tab); press($("ffam"), "fam", F.fam); press($("fsort"), "sort", F.sort); press($("fview"), "view", F.view);
    if ($("fq")) $("fq").value = F.q;
    if ($("fqx")) $("fqx").hidden = !F.q;
  }
  /* 다른 칸(체크 카드·판매조건)에서 가격표로 넘어올 때 */
  function openFinder(o){
    if (!flist) {
      var p = new URLSearchParams();
      if (o.q) p.set("q", o.q); if (o.tab) p.set("tab", o.tab); if (o.hit) p.set("hit", o.hit);
      location.href = "promotion.html?" + p.toString() + "#prices";
      return;
    }
    F.q = o.q || ""; F.tab = o.tab || "all"; F.fam = o.fam || "all"; F.sort = "base"; F.view = "list"; F.hit = o.hit || null;
    syncUI(); renderFinder();
    var target = null;
    if (F.hit) [].some.call(flist.querySelectorAll(".fr[data-k]"), function(el){ return el.dataset.k === F.hit && (target = el); });
    (target || $("prices")).scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: target ? "center" : "start" });
  }
  (function mountFinder(){
    if (!flist) return;
    var ftabs = $("ftabs"), ffam = $("ffam"), fq = $("fq"), fqx = $("fqx");
    ftabs.innerHTML = TABS.map(function(t){
      var n = PRICE_ROWS.filter(t[2]).length;
      if (!n && t[0] !== "all") return "";
      return '<button class="tab" type="button" data-tab="' + t[0] + '" aria-pressed="false">' + t[1] + '<small>' + n + '</small></button>';
    }).join("");
    var fams = FAM_ORDER.filter(function(f){ return PRICE_ROWS.some(function(r){ return famOf(r) === f; }); });
    ffam.innerHTML = '<button class="tab" type="button" data-fam="all" aria-pressed="false">전체 차종</button>' +
      fams.map(function(f){ return '<button class="tab" type="button" data-fam="' + esc(f) + '" aria-pressed="false">' + esc(f) + '</button>'; }).join("");
    ftabs.addEventListener("click", function(e){ var b = e.target.closest("[data-tab]"); if (!b) return; F.tab = b.dataset.tab; F.hit = null; syncUI(); renderFinder(); });
    ffam.addEventListener("click", function(e){ var b = e.target.closest("[data-fam]"); if (!b) return; F.fam = b.dataset.fam; F.hit = null; syncUI(); renderFinder(); });
    $("fsort").addEventListener("click", function(e){ var b = e.target.closest("[data-sort]"); if (!b) return; F.sort = b.dataset.sort; syncUI(); renderFinder(); });
    $("fview").addEventListener("click", function(e){ var b = e.target.closest("[data-view]"); if (!b) return; F.view = b.dataset.view; syncUI(); renderFinder(); });
    var qt = null;
    fq.addEventListener("input", function(){
      clearTimeout(qt);
      qt = setTimeout(function(){ F.q = fq.value.trim(); F.hit = null; fqx.hidden = !F.q; renderFinder(); }, 120);
    });
    fqx.addEventListener("click", function(){ F.q = ""; F.hit = null; syncUI(); renderFinder(); fq.focus(); });
    groupsEl.addEventListener("click", function(e){
      var b = e.target.closest(".pg__head"); if (!b) return;
      var g = b.dataset.g; openGroups[g] = b.getAttribute("aria-expanded") !== "true";
      var box = b.parentNode; box.classList.toggle("is-open", !!openGroups[g]);
      b.setAttribute("aria-expanded", String(!!openGroups[g]));
      box.querySelector(".pg__list").hidden = !openGroups[g];
    });
    /* 다른 페이지에서 ?q=·tab=·fam=·hit= 를 달고 넘어오면 그 조건으로 연다 */
    var ok = function(v, list){ return list.indexOf(v) >= 0; };
    if (qs.get("q")) F.q = qs.get("q");
    if (qs.get("tab") && ok(qs.get("tab"), TABS.map(function(t){ return t[0]; }))) F.tab = qs.get("tab");
    if (qs.get("fam") && ok(qs.get("fam"), fams)) F.fam = qs.get("fam");
    if (qs.get("hit")) F.hit = qs.get("hit");
    if (F.q || F.tab !== "all" || F.fam !== "all" || F.hit) F.view = "list";
    syncUI(); renderFinder();
    if (F.hit) setTimeout(function(){
      [].some.call(flist.querySelectorAll(".fr[data-k]"), function(el){
        if (el.dataset.k !== F.hit) return false;
        el.scrollIntoView({ block: "center" }); return true;
      });
    }, 60);
  })();

  /* ═════════════ 라인업 카드 + 모델 상세 창 (첫 화면) ═════════════ */
  function bestOfModel(k){ return Math.max.apply(null, rowsOfModel(k).map(tot).concat([0])); }
  (function renderLineup(){
    var ul = $("models");
    if (!ul) return;
    ul.innerHTML = MODEL_CARDS.map(function(c){
      var best = bestOfModel(c.key);
      return '<li class="model" data-seg="' + c.seg + '" data-key="' + esc(c.key) + '" tabindex="0" role="button">' +
        '<span class="model__seg">' + esc(c.label) + '</span><h3 class="model__n">' + esc(c.key) + '</h3>' +
        '<p class="model__d">' + esc(c.desc) + '</p><span class="model__cta">모델 자세히 보기 →</span>' +
        (best > 0 ? '<span class="model__deal">' + MON + ' 최대 ' + best + '%</span>' : '') + '</li>';
    }).join("");
    var chips = document.querySelectorAll("#lineup .chip");
    chips.forEach(function(chip){
      chip.addEventListener("click", function(){
        var seg = chip.dataset.seg;
        chips.forEach(function(c){ c.setAttribute("aria-pressed", String(c === chip)); });
        ul.querySelectorAll(".model").forEach(function(m){ m.classList.toggle("is-out", seg !== "all" && m.dataset.seg !== seg); });
      });
    });
  })();

  /* noPrice — 모델 비교 칸은 좁아서 가격 열(위에 따로 나온다)을 뺀다 */
  function specTable(info, noPrice){
    var keep = info.cols.map(function(c, i){ return !(noPrice && c === "가격"); });
    var pick = function(arr){ return arr.filter(function(v, i){ return keep[i]; }); };
    return '<div class="mspec"><table><thead><tr>' +
      pick(info.cols).map(function(c){ return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      info.rows.map(function(r){
        var cells = pick(r);
        return "<tr><th>" + esc(cells[0]) + "</th>" + cells.slice(1).map(function(v){ return "<td>" + esc(v) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>";
  }
  function priceListTable(k){
    var plist = (typeof PRICE_LIST !== "undefined" && PRICE_LIST[k]) || [];
    if (!plist.length) return "";
    return '<div class="mspec mfull"><table><thead><tr><th>연식</th><th>트림</th><th>가격</th></tr></thead><tbody>' +
      plist.map(function(r){
        return '<tr class="my' + r[0] + '"><td><span class="mfull__y">' + r[0] + '년식</span></td><th>' + esc(r[1]) + '</th><td>' +
          manStr(r[2]) + (r[3] > r[2] ? ' ~ ' + manStr(r[3]) : '') + '</td></tr>';
      }).join("") + '</tbody></table></div>';
  }
  var SRC_NOTE = '제원은 메르세데스-벤츠 코리아 공식 카탈로그, 가격은 ' + PRICE_LIST_DATE.replace(/^(\d+)-0?(\d+)-0?(\d+)$/, "$1년 $2월 $3일") +
    ' 자 공식 가격표의 권장 소비자가(부가세 포함) 기준입니다. 라인업 표는 대표 트림만 골라 같은 트림에 여러 라인이 있으면 가장 낮은 가격에 “부터”를 붙였고, ' +
    '「전체 트림 가격」에는 가격표의 26·27년식 전 트림을 실었습니다. 같은 이름에 가격이 둘이면 범위로 적었고, 취득세·등록비 등 부대비용은 포함되지 않았습니다.';

  (function modelDialog(){
    var dlg = $("mdlg");
    if (!dlg || !dlg.showModal) return;
    var last = null;
    function open(card){
      var k = card.dataset.key, info = MODEL_INFO[k];
      if (!info) return;
      last = card;
      $("mdlgSeg").textContent = card.querySelector(".model__seg").textContent;
      $("mdlgName").textContent = k;
      $("mdlgTag").textContent = info.tag;
      var plist = priceListTable(k), n = (PRICE_LIST[k] || []).length;
      var html = '<div><h4>라인업</h4>' + specTable(info) + '</div>';
      if (plist) html += '<div><h4>전체 트림 가격 <small class="mfull__n">' + n + '개 · 부가세 포함</small></h4>' + plist + '</div>';
      html += '<div><h4>' + esc(info.dimTitle || "크기") + '</h4><div class="mdim">' +
        info.dim.map(function(d){ return "<span>" + esc(d) + "</span>"; }).join("") + "</div></div>";
      html += '<div><h4>홍창기 차장의 안내</h4><p class="mnote">' + info.note + "</p></div>";
      html += '<div class="mdlg__cta">' +
        '<a class="btn btn--white" href="model.html?m=' + encodeURIComponent(k) + '">' + esc(k) + ' 페이지로</a>' +
        '<a class="btn btn--kakao" href="quote.html?m=' + encodeURIComponent(k) + '">' + esc(k) + ' 견적 요청</a>' +
        '<a class="btn btn--line" href="tel:' + TEL + '">' + TEL_TXT + '</a></div>';
      html += '<p class="mdlg__src">' + SRC_NOTE + '</p>';
      $("mdlgBody").innerHTML = html;
      $("mdlgBody").parentNode.scrollTop = 0;
      dlg.showModal();
    }
    var ul = $("models");
    if (ul) {
      ul.addEventListener("click", function(e){ var c = e.target.closest(".model[data-key]"); if (c) open(c); });
      ul.addEventListener("keydown", function(e){
        var c = e.target.closest(".model[data-key]");
        if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(c); }
      });
    }
    $("mdlgX").addEventListener("click", function(){ dlg.close(); });
    dlg.addEventListener("click", function(e){ if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("close", function(){ if (last) { last.focus(); last = null; } });
  })();

  /* ═════════════ 구매 추가 혜택 (benefit.html) ═════════════ */
  (function benefitPage(){
    var facts = $("benFacts");
    if (!facts) return;
    function range(vals){
      vals = vals.filter(function(v){ return v > 0; });
      if (!vals.length) return null;
      var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
      return lo === hi ? "+" + hi + "%" : "+" + lo + "~" + hi + "%";
    }
    var ret = range(PRICE_ROWS.map(function(r){ return r.ret; }));
    var trade = range(PRICE_ROWS.map(function(r){ return r.trade; }));
    var conq = range(PRICE_ROWS.map(function(r){ return r.conq || 0; }));
    var ewN = PRICE_ROWS.filter(function(r){ return r.ew; }).length;
    facts.innerHTML = [
      ret ? ["재구매", ret] : null, trade ? ["트레이드인", trade] : null,
      conq ? ["타 브랜드 (컨퀘스트)", conq] : null, ewN ? ["보증연장 대상", ewN + "개 트림"] : null
    ].filter(Boolean).map(function(f, i){
      return '<div class="fact' + (i === 0 ? ' is-gold' : '') + '"><dt>' + f[0] + '</dt><dd>' + f[1] + '</dd></div>';
    }).join("");

    /* 차종별 재구매·트레이드인 표 */
    var t = $("benRetTable");
    if (t) {
      var order = [], by = {};
      sortBase(PRICE_ROWS).forEach(function(r){ var f = famOf(r); if (!by[f]) { by[f] = []; order.push(f); } by[f].push(r); });
      t.innerHTML = '<table class="ttable"><thead><tr><th>차종</th><th class="num">재구매</th><th class="num">트레이드인</th><th class="num">타 브랜드</th><th>해당 트림</th></tr></thead><tbody>' +
        order.map(function(f){
          var rs = by[f];
          var r1 = range(rs.map(function(r){ return r.ret; })), r2 = range(rs.map(function(r){ return r.trade; })), r3 = range(rs.map(function(r){ return r.conq || 0; }));
          var n = rs.filter(function(r){ return r.ret || r.trade || r.conq; }).length;
          return '<tr><th><a href="promotion.html?fam=' + encodeURIComponent(f) + '">' + esc(f) + '</a></th>' +
            '<td class="num">' + (r1 || '—') + '</td><td class="num">' + (r2 || '—') + '</td><td class="num">' + (r3 || '—') + '</td>' +
            '<td>' + n + ' / ' + rs.length + '개</td></tr>';
        }).join("") + '</tbody></table>';
    }
    /* 컨퀘스트 해당 트림 */
    var c = $("benConqList");
    if (c) c.innerHTML = sortBase(PRICE_ROWS.filter(function(r){ return r.conq; })).map(function(r){
      return '<span class="pill pill--violet">' + esc(r.trim) + ' · ' + r.year + '년식 +' + r.conq + '%</span>';
    }).join("") || '<p>이번 달은 컨퀘스트 대상 차량이 없습니다.</p>';
    /* 보증연장 해당 트림 */
    var w = $("benEwList");
    if (w) {
      var labs = {};
      sortBase(PRICE_ROWS.filter(function(r){ return r.ew; })).forEach(function(r){ (labs[r.ew] = labs[r.ew] || []).push(r); });
      w.innerHTML = Object.keys(labs).map(function(k){
        return '<p style="margin-top:12px"><b>' + esc((EW_LABEL[k] || "보증연장").replace(/^\+ /, "")) + '</b></p><div>' +
          labs[k].map(function(r){ return '<span class="pill pill--teal">' + esc(r.trim) + ' · ' + r.year + '년식</span>'; }).join("") + '</div>';
      }).join("") || '<p>이번 달은 보증연장 대상 차량이 없습니다.</p>';
    }
  })();

  /* ═════════════ 모델 비교 (models.html) ═════════════ */
  function modelFacts(k){
    var plist = PRICE_LIST[k] || [], rows = rowsOfModel(k);
    var lo = plist.length ? Math.min.apply(null, plist.map(function(r){ return r[2]; })) : null;
    var hi = plist.length ? Math.max.apply(null, plist.map(function(r){ return r[3]; })) : null;
    var priced = rows.filter(function(r){ return r.msrp !== null; });
    return { lo: lo, hi: hi, n: plist.length, best: bestOfModel(k),
      minMax: priced.length ? Math.min.apply(null, priced.map(maxOf)) : null };
  }
  (function comparePage(){
    var pick = $("cmpPick"), out = $("cmp");
    if (!pick || !out) return;
    var sel = (qs.get("m") || "E-Class,GLC,GLE").split(",").filter(function(k){ return MODEL_INFO[k]; }).slice(0, 3);
    pick.innerHTML = MODEL_CARDS.map(function(c){
      return '<button class="tab" type="button" data-k="' + esc(c.key) + '" aria-pressed="false">' + esc(c.key) + '</button>';
    }).join("");
    function draw(){
      [].forEach.call(pick.children, function(b){ b.setAttribute("aria-pressed", String(sel.indexOf(b.dataset.k) >= 0)); });
      out.className = "cmp n" + sel.length;
      out.innerHTML = sel.map(function(k){
        var info = MODEL_INFO[k], c = cardOf(k) || {}, f = modelFacts(k);
        return '<article class="cmpc"><div class="cmpc__hd"><p class="cmpc__seg">' + esc(c.label || "") + '</p>' +
          '<h3 class="cmpc__n">' + esc(k) + '</h3><p class="cmpc__t">' + esc(info.tag) + '</p></div>' +
          '<dl>' +
            '<div><dt>가격</dt><dd>' + (f.lo ? manStr(f.lo) + (f.hi > f.lo ? ' ~ ' + manStr(f.hi) : '') : '문의') + '</dd></div>' +
            '<div><dt>' + MON + ' 최대 할인</dt><dd class="gold">' + (f.best > 0 ? f.best + '%' : '프로모션 없음') + '</dd></div>' +
            '<div><dt>최대 할인가</dt><dd>' + (f.minMax && f.best > 0 ? manStr(f.minMax) + '부터' : '—') + '</dd></div>' +
            '<div><dt>트림</dt><dd>26·27년식 ' + f.n + '개</dd></div>' +
            '<div><dt>' + esc(info.dimTitle || "크기") + '</dt><dd>' + info.dim.map(esc).join("<br>") + '</dd></div>' +
          '</dl>' + specTable(info, true) +
          '<div class="cmpc__go"><a class="btn btn--white" href="model.html?m=' + encodeURIComponent(k) + '">자세히</a>' +
          '<a class="btn btn--kakao" href="quote.html?m=' + encodeURIComponent(k) + '">견적 요청</a></div></article>';
      }).join("");
      try { history.replaceState(null, "", "?m=" + sel.map(encodeURIComponent).join(",") + location.hash); } catch (e) {}
    }
    pick.addEventListener("click", function(e){
      var b = e.target.closest("[data-k]"); if (!b) return;
      var k = b.dataset.k, i = sel.indexOf(k);
      if (i >= 0) { if (sel.length > 1) sel.splice(i, 1); }
      else { sel.push(k); if (sel.length > 3) sel.shift(); }
      draw();
    });
    draw();

    var all = $("allModels");
    if (all) all.innerHTML = MODEL_CARDS.map(function(c){
      var best = bestOfModel(c.key);
      return '<li><a class="model" href="model.html?m=' + encodeURIComponent(c.key) + '">' +
        '<span class="model__seg">' + esc(c.label) + '</span><h3 class="model__n">' + esc(c.key) + '</h3>' +
        '<p class="model__d">' + esc(c.desc) + '</p><span class="model__cta">모델 정보 보기 →</span>' +
        (best > 0 ? '<span class="model__deal">' + MON + ' 최대 ' + best + '%</span>' : '') + '</a></li>';
    }).join("");
  })();

  /* ═════════════ 차종 상세 (model.html?m=…) ═════════════ */
  /* 트림 · 색상까지 고를 수 있는 차종 — 자료는 assets/cars/<이름>.js (카탈로그 · 제품정보에서 옮김) */
  var CAR_FILES = { "S-Class": "s-class" };
  var ASSET_V = (function(){ var m = (document.currentScript && document.currentScript.src || "").match(/[?&]v=([^&]+)/); return m ? m[1] : "1"; })();

  (function modelPage(){
    var root = $("mpage");
    if (!root) return;
    var k = qs.get("m");
    if (!k || !MODEL_INFO[k]) { location.replace("models.html#all"); return; }
    if (CAR_FILES[k]) {
      var sc = document.createElement("script");
      sc.src = "assets/cars/" + CAR_FILES[k] + ".js?v=" + ASSET_V;
      sc.onload = function(){ if (window.CARS && CARS[k]) renderCar(root, k, CARS[k]); else generic(); };
      sc.onerror = generic;
      document.head.appendChild(sc);
    } else generic();
    function generic(){
    var info = MODEL_INFO[k], c = cardOf(k) || {}, f = modelFacts(k), rows = sortBase(rowsOfModel(k));
    document.title = k + " 모델 정보 · 가격 · " + MON + " 할인 | 별주행 벤츠 홍창기";
    var promoLink = FAM_ORDER.indexOf(k) >= 0 ? "promotion.html?fam=" + encodeURIComponent(k)
      : "promotion.html?q=" + encodeURIComponent(k === "Mercedes-AMG" ? "AMG" : k === "Electric" ? "전기" : k);
    var others = MODEL_CARDS.filter(function(x){ return x.key !== k; }).map(function(x){
      return '<a class="tab" href="model.html?m=' + encodeURIComponent(x.key) + '">' + esc(x.key) + '</a>';
    }).join("");
    var isS = k === "S-Class";
    root.innerHTML =
      '<header class="phero"><div class="wrap">' +
        '<nav class="crumb" aria-label="현재 위치"><a href="index.html">홈</a><span><a href="models.html">신차 · 모델</a></span><span>' + esc(k) + '</span></nav>' +
        '<p class="phero__k">' + esc(c.label || "MODEL") + '</p><h1>' + esc(k) + '</h1>' +
        '<p class="phero__lede">' + esc(info.tag) + '</p>' +
        '<dl class="phero__facts">' +
          '<div class="fact"><dt>가격</dt><dd>' + (f.lo ? manStr(f.lo) + (f.hi > f.lo ? ' ~' : '') : '문의') + '</dd></div>' +
          '<div class="fact is-gold"><dt>' + MON + ' 최대 할인</dt><dd>' + (f.best > 0 ? f.best + '%' : '없음') + '</dd></div>' +
          (f.minMax && f.best > 0 ? '<div class="fact"><dt>최대 할인가</dt><dd>' + manStr(f.minMax) + '부터</dd></div>' : '') +
          '<div class="fact"><dt>트림</dt><dd>' + f.n + '개</dd></div>' +
        '</dl>' +
        '<div class="phero__cta"><a class="btn btn--white" href="quote.html?m=' + encodeURIComponent(k) + '">' + esc(k) + ' 견적 요청 →</a>' +
          '<a class="btn btn--line" href="test-drive.html?m=' + encodeURIComponent(k) + '">시승 예약</a>' +
          '<a class="btn btn--kakao" href="' + KAKAO + '" target="_blank" rel="noopener">카카오톡 상담</a></div>' +
        (k === "Mercedes-Maybach" ? '<div class="cta-band" style="margin-top:22px"><div><h3>마이바흐 S-Class 트림 · 색상 고르기</h3><p>Maybach S 580 · S 580 MANUFAKTUR · S 680 의 사양 비교, 투톤 색상, 시트를 S-Class 페이지에서 함께 보실 수 있습니다.</p></div>' +
          '<div class="acts"><a class="btn btn--white" href="model.html?m=S-Class&amp;t=mb580">마이바흐 구성 보기 →</a></div></div>' : '') +
        (isS ? '<div class="mshots">' + SHOTS.map(function(s){ return '<img src="' + s.src + '" alt="' + s.title + ' — ' + s.note + '" loading="lazy">'; }).join("") + '</div>' : '') +
      '</div></header>' +
      '<nav class="mtabs" aria-label="이 페이지 목차"><div class="wrap">' +
        '<a href="#deal">' + MON + ' 조건</a><a href="#spec">라인업 · 제원</a><a href="#all-prices">전체 트림 가격</a><a href="#size">' + esc(info.dimTitle || "크기") + '</a><a href="#advice">상담 안내</a></div></nav>' +
      '<section class="sec" id="deal" data-toc="' + MON + ' 조건"><div class="wrap">' +
        '<div class="sec__head"><h2 class="sec__title">' + esc(k) + ' <em>' + MON + ' 할인 · 최종가</em></h2>' +
        '<p class="sec__note">현금 · 할부 할인을 적용한 「할인 적용가」와 재구매 · 트레이드인까지 모두 적용한 「최대 할인가」입니다. ' + PRICE_ASOF + '.</p></div>' +
        (rows.length ? '<div class="flist">' + HEAD + rows.map(function(r){ return rowHTML(r); }).join("") + '</div>' : '<p class="box">이번 달 가격표에 이 차종이 없습니다. 문의 주시면 바로 확인해 드립니다.</p>') +
        '<p class="p-foot"><a class="deal__all" href="' + promoLink + '">' + MON + ' 프로모션 가격표에서 보기 →</a></p>' +
      '</div></section>' +
      '<section class="sec" id="spec" data-toc="라인업 · 제원"><div class="wrap"><div class="sec__head"><h2 class="sec__title">라인업 · 제원</h2></div>' + specTable(info) + '</div></section>' +
      (priceListTable(k) ? '<section class="sec" id="all-prices" data-toc="전체 트림 가격"><div class="wrap"><div class="sec__head"><h2 class="sec__title">전체 트림 가격 <small class="mfull__n">' + f.n + '개 · 부가세 포함</small></h2></div>' + priceListTable(k) + '</div></section>' : '') +
      '<section class="sec" id="size" data-toc="' + esc(info.dimTitle || "크기") + '"><div class="wrap"><div class="sec__head"><h2 class="sec__title">' + esc(info.dimTitle || "크기") + '</h2></div><div class="mdim">' +
        info.dim.map(function(d){ return "<span>" + esc(d) + "</span>"; }).join("") + '</div></div></section>' +
      '<section class="sec" id="advice" data-toc="상담 안내"><div class="wrap"><div class="sec__head"><h2 class="sec__title">홍창기 차장의 안내</h2></div>' +
        '<p class="mnote">' + info.note + '</p><p class="mdlg__src" style="margin-top:14px">' + SRC_NOTE + '</p>' +
        '<div class="cta-band"><div><h3>' + esc(k) + ', 내 조건으로 받아 보세요</h3><p>재구매 · 트레이드인 · 법인 여부를 알려 주시면 가장 유리한 조합으로 견적서를 보내 드립니다.</p></div>' +
          '<div class="acts"><a class="btn btn--white" href="quote.html?m=' + encodeURIComponent(k) + '">견적 요청</a><a class="btn btn--line" href="tel:' + TEL + '">' + TEL_TXT + '</a></div></div>' +
        '<h3 style="margin-top:36px;font-size:15px;color:var(--ink-soft)">다른 차종 보기</h3><div class="others tabs">' + others + '</div>' +
      '</div></section>';
    /* 목차 밑줄 */
    var links = [].slice.call(root.querySelectorAll(".mtabs a"));
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function(es){
        es.forEach(function(e){
          if (!e.isIntersecting) return;
          links.forEach(function(a){ a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id); });
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      root.querySelectorAll("section[id]").forEach(function(s){ io.observe(s); });
    }
    }
  })();

  /* ═════════════ 차종 구성 페이지 — 트림을 고르면 사양 · 제원 · 색상이 따라 바뀐다 ═════════════
     car = CARS[차종] (assets/cars/*.js)
       trims[]   : 가격 오름차순. row = PRICE_ROWS 의 "연식|트림"(이번 달 조건 연결)
       features[]: { g:묶음, rows:[[사양, 트림별 값…]] } — "S" 기본, "-" 없음, 그 밖은 값 그대로
       specs     : { rows:[[항목, 트림별 값…]], hi:{항목:가장 좋은 값 열 번호} }
       engines · wheels · woods · upholstery · colors : 카탈로그 그림과 이름 */
  function renderCar(root, k, car){
    var T = car.trims, ti = 0;
    var tq = qs.get("t");
    T.forEach(function(t, i){ if (t.id === tq) ti = i; });
    var sel = { ext: null, upc: 0 };
    var info = MODEL_INFO[k] || {}, rowsAll = sortBase(rowsOfModel(k));
    document.title = car.name + " 트림 · 사양 · 색상 · " + MON + " 조건 | 별주행 벤츠 홍창기";
    function rowOf(t){ var r = null; PRICE_ROWS.some(function(x){ return key(x) === t.row && (r = x); }); return r; }
    function val(v){ return v === "S" ? "기본" : v === "-" ? "—" : v; }
    function same(arr){ return arr.every(function(v){ return v === arr[0]; }); }

    root.innerHTML =
      '<header class="cx-hero"><div class="kb" id="cxkb" aria-hidden="true"></div><div class="cx-hero__shade"></div>' +
        '<div class="cx-crumb"><div class="wrap"><nav class="crumb" aria-label="현재 위치"><a href="index.html">홈</a><span><a href="models.html">신차 · 모델</a></span><span>' + esc(car.name) + '</span></nav></div></div>' +
        '<div class="wrap cx-hero__in">' +
          '<p class="cx-brand"><i></i>Mercedes-Benz · ' + esc(car.badge) + '</p>' +
          '<h1 class="cx-name">' + esc(car.name) + '</h1>' +
          '<p class="cx-sub">' + car.tagline + '</p>' +
          '<div class="cx-cta"><a class="btn btn--white" href="#trims">트림 · 옵션 고르기 ↓</a><a class="btn ghost" href="#specs">엔진 · 제원 →</a></div>' +
        '</div></header>' +
      '<div class="selbar" id="trims"><div class="wrap"><div class="trimsel" id="tsel" role="tablist" aria-label="트림 고르기">' +
        T.map(function(t, i){ return '<button class="tchip" type="button" role="tab" data-i="' + i + '"><b>' + esc(t.short) + '</b><span>' + esc(car.bodies[t.body]) + ' · ' + esc(t.line) + '</span></button>'; }).join("") +
      '</div></div></div>' +
      '<div class="cx">' +
        '<div class="wrap"><article class="tcard" id="tcard"></article></div>' +
        '<section class="cx-sec" id="diff" data-toc="트림별 달라지는 사양"><div class="wrap">' +
          '<h2 class="sec__title">트림을 올리면 <em>무엇이 달라지나요</em></h2>' +
          '<p class="sec__note">' + esc(car.name) + ' 전 트림에 공통으로 들어가는 사양과, 고른 트림에서 바로 아래 트림 대비 달라지는 사양입니다. 제품정보(' + esc(car.asof) + ') 기준.</p>' +
          '<div class="diffs" id="diffs"></div>' +
          '<div class="vmx" id="vmx"></div>' +
          '<div class="fmx" id="fmx"></div><p class="fmx__note">기본 = 기본 적용 · — = 해당 없음 · 표의 트림 이름을 누르면 그 트림으로 바뀝니다.</p>' +
        '</div></section>' +
        '<section class="cx-sec" id="specs" data-toc="엔진 · 트림별 제원"><div class="wrap">' +
          '<p class="sec__eyebrow">Powertrain</p><h2 class="sec__title">엔진과 <em>트림별 제원</em></h2>' +
          (car.engineNote ? '<p class="sec__note">' + car.engineNote + '</p>' : '') +
          '<div class="engs" id="engs"></div>' +
          '<div class="stab" id="stab"></div>' +
          (car.specNote ? '<p class="fmx__note">' + car.specNote + '</p>' : '') +
        '</div></section>' +
        '<section class="cx-sec" id="colors" data-toc="색상 · 내장"><div class="wrap">' +
          '<p class="sec__eyebrow">Colours &amp; Interior</p><h2 class="sec__title">색상과 <em>내장</em></h2>' +
          '<p class="sec__note">외장 색상을 고르면 아래 요약과 견적 문의에 같이 담깁니다. 트림 · 생산 시기에 따라 고를 수 없는 색상이 있고 MANUFAKTUR 색상은 추가 비용이 붙으니, 원하시는 색을 고르고 문의 주시면 가능 여부와 재고를 바로 확인해 드립니다.</p>' +
          '<div class="cfg"><h3>외장 색상 <small id="cxExtN"></small></h3><div class="cgrid c4" id="cxExt"></div></div>' +
          '<div class="cfg"><h3>시트 <small id="cxUpN"></small></h3><div class="cgrid" id="cxUp"></div></div>' +
          '<div class="cfg"><h3>우드 트림 <small id="cxWdN"></small></h3><div class="cgrid c4" id="cxWd"></div></div>' +
        '</div></section>' +
        '<section class="cx-sec" id="ask" data-toc="고른 사양으로 문의"><div class="wrap">' +
          '<h2 class="sec__title">고른 사양으로 <em>견적 문의</em></h2>' +
          '<div class="sum" id="cxSum"></div>' +
          (rowsAll.length ? '<h3 style="margin-top:44px;font-size:18px;font-weight:800">' + esc(k) + ' 26 · 27년식 ' + MON + ' 할인 · 최종가</h3>' +
            '<div class="flist" style="margin-top:14px">' + HEAD + rowsAll.map(function(r){ return rowHTML(r); }).join("") + '</div>' : '') +
          (info.note ? '<h3 style="margin-top:40px;font-size:18px;font-weight:800">홍창기 차장의 안내</h3><p class="mnote" style="margin-top:12px">' + info.note + '</p>' : '') +
          '<p class="cx-src">' + esc(car.source) + ' 기준으로 정리했습니다. 사진은 메르세데스-벤츠 공식 카탈로그 이미지로 실제 판매 차량과 다를 수 있고, 사양은 본사 정책에 따라 예고 없이 바뀔 수 있습니다. 가격은 부가세 포함 권장 소비자가입니다.</p>' +
        '</div></section>' +
      '</div>';

    startKb($("cxkb"), car.hero);

    /* 전 트림 공통 / 달라지는 사양 나누기 */
    var common = [], diffRows = [];
    car.features.forEach(function(g){
      g.rows.forEach(function(r){
        var vals = r.slice(1);
        if (same(vals)) common.push({ g: g.g, n: r[0], v: vals[0] });
        else diffRows.push({ g: g.g, n: r[0], vals: vals });
      });
    });

    function engineOf(t){ return car.engines[t.engine] || {}; }
    function drawTrim(){
      var t = T[ti], r = rowOf(t), e = engineOf(t), w = car.wheels[t.wheel] || {}, up = car.upholstery[t.upholstery] || {};
      [].forEach.call($("tsel").children, function(b, i){ b.classList.toggle("on", i === ti); b.setAttribute("aria-selected", String(i === ti)); });
      var deal = r && r.msrp !== null && tot(r) > 0
        ? MON + ' 조건 — ' + mixOf(r) + ' 적용 시 최대 할인가 <b>' + manStr(maxOf(r)) + '</b>' + (r.ew ? ' · ' + esc((EW_LABEL[r.ew] || '').replace(/^\+ /, '')) : '')
        : MON + ' 프로모션 대상이 아닌 트림입니다. 금융 · 재고 조건은 문의 주세요.';
      $("tcard").innerHTML =
        '<div class="tcard__img"><img src="' + (t.img || car.lines[t.line] || car.hero[0]) + '" alt="' + esc(car.name + ' ' + t.line) + '"><em>' + esc(t.line) + ' 디자인 · 카탈로그 이미지</em></div>' +
        '<div><p class="tcard__k">' + esc(car.bodies[t.body]) + ' · ' + esc(t.line) + '</p>' +
          '<h2 class="tcard__n">' + esc(t.name) + '</h2>' +
          '<p class="tcard__m">' + esc([e.kind, w.name, up.name].filter(Boolean).join(' · ')) + '</p>' +
          '<p class="tcard__p num">' + manStr(t.price) + '</p>' +
          (t.highlights ? '<p class="tcard__hl">' + t.highlights.map(function(h){ return '<span>' + esc(h) + '</span>'; }).join("") + '</p>' : '') +
          '<p class="tcard__deal">' + deal + '</p>' +
          '<div class="tcard__acts"><a class="btn btn--kakao" href="quote.html?k=' + encodeURIComponent(t.row) + '">이 트림 견적 요청</a>' +
          '<a class="btn btn--line" href="test-drive.html?m=' + encodeURIComponent(k) + '">시승 예약</a>' +
          '<a class="btn btn--line" href="finance.html?k=' + encodeURIComponent(t.row) + '">할부 계산</a></div></div>';

      /* 공통 · 달라지는 점 */
      var prev = ti > 0 ? T[ti - 1] : null, changes = [];
      diffRows.forEach(function(d){
        var v = d.vals[ti], pv = prev ? d.vals[ti - 1] : null;
        if (!prev) { if (v !== "-") changes.push('<li><span><b>' + esc(d.n) + '</b> ' + esc(val(v)) + '</span></li>'); return; }
        if (v === pv) return;
        var tag = pv === "-" ? '<span class="nb">추가</span> ' : v === "-" ? '<span class="nb up" style="background:#556">없음</span> ' : '<span class="nb up">변경</span> ';
        changes.push('<li><span>' + tag + '<b>' + esc(d.n) + '</b> ' + esc(val(v)) + (pv !== null ? '<span class="was">' + esc(val(pv)) + '</span>' : '') + '</span></li>');
      });
      $("diffs").innerHTML =
        '<div class="dbox cur"><h3>' + esc(t.short) + ' <small>' + (prev ? esc(prev.short) + ' 대비 달라지는 사양' : '기본 트림의 주요 사양') + '</small></h3>' +
          '<ul class="dlist two">' + (changes.join("") || '<li><span>바로 아래 트림과 사양 구성이 같습니다.</span></li>') + '</ul></div>' +
        '<div class="dbox"><h3>전 트림 공통 <small>' + common.length + '가지 · 어느 트림을 고르셔도 들어갑니다</small></h3><ul class="dlist three">' +
          common.map(function(c){ return '<li><span><b>' + esc(c.n) + '</b>' + (c.v !== "S" ? ' ' + esc(c.v) : '') + '</span></li>'; }).join("") + '</ul></div>';

      /* 트림 비교 표 — 고른 열 강조 */
      var groups = [], lastG = null, body = "";
      diffRows.forEach(function(d){
        if (d.g !== lastG) { lastG = d.g; body += '<tr class="g"><th colspan="' + (T.length + 1) + '">' + esc(d.g) + '</th></tr>'; }
        body += '<tr><th>' + esc(d.n) + '</th>' + d.vals.map(function(v, i){
          return '<td class="' + (v === "-" ? 'n' : 'y') + (i === ti ? ' cur' : '') + '">' + esc(val(v)) + '</td>';
        }).join("") + '</tr>';
      });
      $("fmx").innerHTML = '<table style="min-width:' + (170 + T.length * 118) + 'px"><thead><tr><th>사양</th>' + T.map(function(x, i){
        return '<th class="' + (i === ti ? 'cur' : '') + '" data-i="' + i + '">' + esc(x.short) + '</th>'; }).join("") + '</tr></thead><tbody>' + body + '</tbody></table>';

      /* 휠 · 시트 · 우드 한눈에 */
      $("vmx").innerHTML = T.map(function(x, i){
        var ww = car.wheels[x.wheel] || {}, uu = car.upholstery[x.upholstery] || {}, wd = car.woods[x.wood] || {};
        return '<button class="vcell' + (i === ti ? ' on' : '') + '" type="button" data-i="' + i + '">' +
          (ww.img ? '<img src="' + ww.img + '" alt="' + esc(ww.name || '') + '" loading="lazy">' : '') +
          '<b>' + esc(x.short) + '</b><span>' + esc(ww.name || '') + '<br>' + esc(uu.name || '') + ' · ' + esc(wd.name || '') + '</span></button>';
      }).join("");

      /* 엔진 카드 · 제원 표 */
      var eKeys = Object.keys(car.engines);
      $("engs").innerHTML = eKeys.map(function(id){
        var en = car.engines[id], uses = T.filter(function(x){ return x.engine === id; }).map(function(x){ return x.short; });
        return '<article class="eng' + (T[ti].engine === id ? ' on' : '') + '">' + (en.img ? '<img src="' + en.img + '" alt="' + esc(en.name) + ' 엔진" loading="lazy">' : '') +
          '<div class="eng__b"><p class="eng__k">' + esc(en.name) + '</p><p class="eng__n">' + esc(en.kind) + '</p>' +
          (en.chips ? '<div class="eng__s">' + en.chips.map(function(c){ return '<span>' + esc(c) + '</span>'; }).join("") + '</div>' : '') +
          '<p>' + en.desc + '</p><p class="eng__in">적용 <b>' + esc(uses.join(' · ')) + '</b></p></div></article>';
      }).join("");
      if (car.specs) $("stab").innerHTML = '<table style="min-width:' + (150 + T.length * 112) + 'px"><thead><tr><th>구분</th>' + T.map(function(x, i){
          return '<th class="' + (i === ti ? 'cur' : '') + '" data-i="' + i + '">' + esc(x.short) + '</th>'; }).join("") + '</tr></thead><tbody>' +
        car.specs.rows.map(function(r){
          var hi = car.specs.hi && car.specs.hi[r[0]];
          return '<tr><th>' + esc(r[0]) + '</th>' + r.slice(1).map(function(v, i){
            return '<td class="' + (i === ti ? 'cur' : '') + (hi === i ? ' hi' : '') + '">' + esc(v) + '</td>'; }).join("") + '</tr>';
        }).join("") + '<tr><th>판매가격</th>' + T.map(function(x, i){ return '<td class="' + (i === ti ? 'cur' : '') + '">' + manStr(x.price) + '</td>'; }).join("") + '</tr>' +
        '</tbody></table>';
      else $("stab").hidden = true;

      /* 시트 · 우드 — 트림에 따라 */
      if (sel.upc >= (up.colors || []).length) sel.upc = 0;
      $("cxUpN").textContent = (up.name || '') + ' · ' + t.short;
      $("cxUp").innerHTML = (up.colors || []).map(function(c, i){
        return '<button class="cc2' + (i === sel.upc ? ' is-sel' : '') + '" type="button" data-up="' + i + '">' + (c.img ? '<img src="' + c.img + '" alt="' + esc(up.name + ' ' + c.name) + '" loading="lazy">' : '') +
          '<span class="b"><span><b>' + esc(up.name + ', ' + c.name) + '</b></span></span></button>';
      }).join("");
      $("cxWdN").textContent = t.short + ' 기본 — ' + ((car.woods[t.wood] || {}).name || '');
      $("cxWd").innerHTML = Object.keys(car.woods).map(function(id){
        var wd = car.woods[id], on = id === t.wood;
        var who = T.filter(function(x){ return x.wood === id; }).map(function(x){ return x.short; }).join(' · ');
        return '<div class="cc2' + (on ? ' is-sel' : ' off') + '">' + (wd.img ? '<img src="' + wd.img + '" alt="' + esc(wd.name) + '" loading="lazy">' : '') +
          '<span class="b"><span><b>' + esc(wd.name) + '</b><small>' + (who ? esc(who) + ' 기본' : '선택 사양') + '</small></span></span></div>';
      }).join("");
      drawSum();
    }
    function colorOk(c){ return !c.only || c.only === T[ti].line; }
    function drawExt(){
      var t = T[ti], mb = t.line === "Maybach";
      if (sel.ext !== null && !colorOk(car.colors[sel.ext])) sel.ext = null;
      var shown = car.colors.filter(colorOk);
      $("cxExtN").textContent = shown.length + '가지 · ' + (mb ? '마이바흐 카탈로그 기준 · 투톤 포함' : '카탈로그 기준');
      $("cxExt").innerHTML = car.colors.map(function(c, i){
        if (!colorOk(c)) return "";
        var src = (mb && c.imgMb) || c.img;
        return '<button class="cc2' + (sel.ext === i ? ' is-sel' : '') + '" type="button" data-ext="' + i + '">' + (src ? '<img src="' + src + '" alt="' + esc(c.name) + '" loading="lazy">' : '') +
          '<span class="b"><span><b>' + esc(c.name.replace(/^MANUFAKTUR\s*/, '')) + (c.mfk ? '<span class="mfk">MANUFAKTUR</span>' : '') + '</b></span></span></button>';
      }).join("");
    }
    function drawSum(){
      var t = T[ti], r = rowOf(t), e = engineOf(t), up = car.upholstery[t.upholstery] || {}, uc = (up.colors || [])[sel.upc] || {};
      var ext = sel.ext === null ? null : car.colors[sel.ext];
      var lines = [
        ['외장 색상', ext ? ext.name : '아직 안 골랐어요'],
        ['시트', (up.name || '') + (uc.name ? ', ' + uc.name : '')],
        ['우드 트림', (car.woods[t.wood] || {}).name || '—'],
        ['휠', (car.wheels[t.wheel] || {}).name || '—'],
        ['엔진', e.kind || '—'],
        ['차량가', manStr(t.price)]
      ];
      if (r && r.msrp !== null && tot(r) > 0) lines.push([MON + ' 최대 할인가', manStr(maxOf(r)) + ' (' + mixOf(r) + ')']);
      var memo = car.name + ' 구성: ' + t.name + ' / 외장 ' + (ext ? ext.name : '미정') + ' / 시트 ' + (up.name || '') + (uc.name ? ' ' + uc.name : '');
      $("cxSum").innerHTML = '<div class="sum__hd"><p class="sum__k">SELECTED</p><p class="sum__n">' + esc(t.name) + '</p></div>' +
        '<dl>' + lines.map(function(l){ return '<div><dt>' + esc(l[0]) + '</dt><dd>' + esc(l[1]) + '</dd></div>'; }).join("") + '</dl>' +
        '<div class="sum__acts"><a class="btn btn--white" href="quote.html?k=' + encodeURIComponent(t.row) + '&memo=' + encodeURIComponent(memo) + '">이 구성으로 견적 요청 →</a>' +
        '<a class="btn btn--line" href="test-drive.html?m=' + encodeURIComponent(k) + '&memo=' + encodeURIComponent(memo) + '">시승 예약</a>' +
        '<a class="btn btn--kakao" href="' + KAKAO + '" target="_blank" rel="noopener">카카오톡 상담</a></div>';
    }
    function pick(i){
      ti = i; drawExt(); drawTrim();
      try { history.replaceState(null, "", "?m=" + encodeURIComponent(k) + "&t=" + T[ti].id + location.hash); } catch (x) {}
    }
    root.addEventListener("click", function(e){
      var b = e.target.closest("[data-i]");
      if (b && root.contains(b) && !b.closest(".flist")) { pick(+b.dataset.i); if (b.closest(".vmx")) $("trims").scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); return; }
      var x = e.target.closest("[data-ext]");
      if (x) { var n = +x.dataset.ext; sel.ext = sel.ext === n ? null : n; drawExt(); drawSum(); return; }
      var u = e.target.closest("[data-up]");
      if (u) { sel.upc = +u.dataset.up; drawTrim(); }
    });
    drawExt(); drawTrim();
  }

  /* ═════════════ 할부 계산기 (finance.html) ═════════════ */
  (function financePage(){
    var form = $("calcForm");
    if (!form) return;
    var carSel = $("cCar"), basis = $("cBasis"), price = $("cPrice"), down = $("cDown"), downPct = $("cDownPct"),
        months = $("cMonths"), rate = $("cRate"), balloon = $("cBalloon"), balloonPct = $("cBalloonPct"), presets = $("cPresets");
    var S = { basis: "best", months: 60 };
    /* 차량 고르기 — 차종별 묶음 */
    var priced = sortBase(PRICE_ROWS.filter(function(r){ return r.msrp !== null; }));
    var html = '<option value="">직접 입력</option>', last = null;
    priced.forEach(function(r){
      var f = famOf(r);
      if (f !== last) { html += (last ? '</optgroup>' : '') + '<optgroup label="' + esc(f) + '">'; last = f; }
      html += '<option value="' + esc(key(r)) + '">' + esc(r.trim) + ' (' + r.year + '년식)</option>';
    });
    carSel.innerHTML = html + (last ? '</optgroup>' : '');
    presets.innerHTML = FIN_PRESETS.map(function(p, i){
      return '<button class="preset" type="button" data-i="' + i + '"><b>' + esc(p.name) + '</b><span>' + esc(p.note) + ' · 공문 기준</span></button>';
    }).join("") + '<button class="preset" type="button" data-i="-1"><b>직접 설정</b><span>기간 · 금리 · 선수금을 바꿔 보세요</span></button>';
    function rowByKey(kk){ for (var i = 0; i < PRICE_ROWS.length; i++) if (key(PRICE_ROWS[i]) === kk) return PRICE_ROWS[i]; return null; }
    function num(el){ return parseFloat(String(el.value).replace(/[^\d.]/g, "")) || 0; }
    function setPrice(){
      var r = rowByKey(carSel.value);
      basis.closest(".fld").hidden = !r;
      if (!r) return;
      var v = S.basis === "msrp" ? r.msrp : S.basis === "max" ? maxOf(r) : bestOf(r);
      price.value = won.format(man(v));
    }
    function calc(){
      var P0 = num(price) * 10000, dp = Math.min(100, Math.max(0, num(downPct))), n = S.months, y = Math.max(0, num(rate)),
          bp = Math.min(60, Math.max(0, num(balloonPct)));
      var D = Math.round(P0 * dp / 100), P = P0 - D, B = Math.round(P0 * bp / 100);
      if (B > P) B = P;
      var r = y / 12 / 100, pay;
      if (!P0) pay = 0;
      else if (r === 0) pay = (P - B) / n;
      else pay = (P - B / Math.pow(1 + r, n)) * r / (1 - Math.pow(1 + r, -n));
      pay = Math.round(pay);
      var interest = Math.max(0, pay * n + B - P), total = D + pay * n + B;
      down.textContent = won.format(D) + "원";
      balloon.textContent = B ? won.format(B) + "원" : "없음";
      $("rPay").innerHTML = won.format(pay) + '<small>원 / 월</small>';
      $("rPayK").textContent = n + "개월 · 연 " + y + "%" + (bp ? " · 유예 " + bp + "%" : "");
      $("rPrice").textContent = won.format(P0) + "원";
      $("rDown").textContent = won.format(D) + "원";
      $("rLoan").textContent = won.format(P) + "원";
      $("rBalloon").textContent = B ? won.format(B) + "원" : "—";
      $("rInt").textContent = won.format(interest) + "원";
      $("rTotal").textContent = won.format(total) + "원";
      var sum = D + P + interest || 1;
      $("rBar").innerHTML = '<i class="b1" style="width:' + (D / sum * 100) + '%"></i><i class="b2" style="width:' + (P / sum * 100) + '%"></i><i class="b3" style="width:' + (interest / sum * 100) + '%"></i>';
      var r0 = rowByKey(carSel.value);
      var memo = "할부 " + n + "개월 · 선수금 " + dp + "% · 연 " + y + "%" + (bp ? " · 유예 " + bp + "%" : "") + " → 월 " + won.format(pay) + "원 (계산기 기준)";
      $("rQuote").href = "quote.html?" + (r0 ? "k=" + encodeURIComponent(key(r0)) + "&" : "") + "memo=" + encodeURIComponent(memo);
    }
    function pressMonths(){ [].forEach.call(months.children, function(b){ b.setAttribute("aria-pressed", String(+b.dataset.m === S.months)); }); }
    function pressBasis(){ [].forEach.call(basis.children, function(b){ b.setAttribute("aria-pressed", String(b.dataset.b === S.basis)); }); }
    function applyPreset(i){
      [].forEach.call(presets.children, function(b){ b.classList.toggle("on", +b.dataset.i === i); });
      if (i < 0) return;
      var p = FIN_PRESETS[i];
      S.months = p.months; rate.value = p.rate; downPct.value = p.down; balloonPct.value = 0;
      pressMonths(); calc();
    }
    carSel.addEventListener("change", function(){ setPrice(); calc(); });
    basis.addEventListener("click", function(e){ var b = e.target.closest("[data-b]"); if (!b) return; S.basis = b.dataset.b; pressBasis(); setPrice(); calc(); });
    months.addEventListener("click", function(e){ var b = e.target.closest("[data-m]"); if (!b) return; S.months = +b.dataset.m; pressMonths(); applyPresetMark(); calc(); });
    presets.addEventListener("click", function(e){ var b = e.target.closest("[data-i]"); if (b) applyPreset(+b.dataset.i); });
    function applyPresetMark(){ [].forEach.call(presets.children, function(b){ b.classList.toggle("on", +b.dataset.i === -1); }); }
    [price, downPct, rate, balloonPct].forEach(function(el){ el.addEventListener("input", function(){ if (el !== price) applyPresetMark(); calc(); }); });
    price.addEventListener("input", function(){ if (carSel.value) { carSel.value = ""; basis.closest(".fld").hidden = true; } });
    price.addEventListener("blur", function(){ var v = num(price); price.value = v ? won.format(v) : ""; });
    /* 처음 값 — ?k= 로 차를 받아 오거나 첫 화면 1위 차 */
    var start = qs.get("k") && rowByKey(qs.get("k")) ? qs.get("k") : (DEALS[0] ? key(DEALS[0]) : "");
    carSel.value = start;
    pressBasis(); setPrice(); applyPreset(FIN_PRESETS.length > 1 ? 1 : 0); calc();
  })();

  /* ═════════════ 견적 요청 · 시승 예약 (quote.html · test-drive.html) ═════════════ */
  (function requestPage(){
    var form = $("reqForm");
    if (!form) return;
    var kind = form.dataset.kind;           /* quote | drive */
    var mSel = $("qModel"), tSel = $("qTrim"), msg = $("qMsg");
    mSel.innerHTML = '<option value="">차종을 골라 주세요</option>' + MODEL_CARDS.map(function(c){
      return '<option value="' + esc(c.key) + '">' + esc(c.key) + ' — ' + esc(c.label) + '</option>';
    }).join("") + '<option value="미정">아직 못 정했어요</option>';
    function fillTrims(){
      if (!tSel) return;
      var rs = mSel.value && mSel.value !== "미정" ? sortBase(rowsOfModel(mSel.value)) : [];
      tSel.innerHTML = '<option value="">트림은 상담 때 정할게요</option>' + rs.map(function(r){
        return '<option value="' + esc(key(r)) + '">' + esc(r.trim) + ' (' + r.year + '년식)' + (r.msrp !== null && tot(r) > 0 ? ' — 최대 ' + tot(r) + '%' : '') + '</option>';
      }).join("");
      tSel.closest(".fld").hidden = !rs.length;
    }
    /* 넘어온 값으로 채우기 — ?m=차종 · ?k=연식|트림 · ?memo= */
    var k0 = qs.get("k"), m0 = qs.get("m");
    var row0 = null;
    if (k0) PRICE_ROWS.some(function(r){ return key(r) === k0 && (row0 = r); });
    if (row0) {
      var fam = MODEL_CARDS.filter(function(c){ return rowsOfModel(c.key).indexOf(row0) >= 0; });
      var pickFam = fam.filter(function(c){ return c.key === famOf(row0); })[0] || fam[0];
      if (pickFam) m0 = pickFam.key;
    }
    if (m0 && cardOf(m0)) mSel.value = m0;
    fillTrims();
    if (row0 && tSel) tSel.value = key(row0);
    if (qs.get("memo") && $("qMemo")) $("qMemo").value = qs.get("memo");

    function val(id){ var el = $(id); return el ? el.value.trim() : ""; }
    function checked(name){ return [].slice.call(form.querySelectorAll('input[name="' + name + '"]:checked')).map(function(i){ return i.value; }); }
    function compose(){
      var L = [];
      L.push(kind === "drive" ? "[시승 예약] 별주행 벤츠 홈페이지에서 보냅니다" : "[견적 요청] 별주행 벤츠 홈페이지에서 보냅니다");
      L.push("");
      L.push("차종: " + (mSel.value || "미정"));
      if (tSel && tSel.value) {
        var r = null; PRICE_ROWS.some(function(x){ return key(x) === tSel.value && (r = x); });
        if (r) L.push("트림: " + r.trim + " (" + r.year + "년식)" + (r.msrp !== null ? " · 차량가 " + manStr(r.msrp) + (tot(r) > 0 ? " · " + MON + " 최대 할인가 " + manStr(maxOf(r)) : "") : ""));
      }
      if (kind === "drive") {
        if (val("qDate")) L.push("희망 날짜: " + val("qDate"));
        var tm = checked("time"); if (tm.length) L.push("희망 시간대: " + tm.join(", "));
      } else {
        var pay = checked("pay"); if (pay.length) L.push("구매 방법: " + pay.join(", "));
        var ben = checked("ben"); if (ben.length) L.push("해당 사항: " + ben.join(", "));
        if (val("qWhen")) L.push("희망 출고: " + val("qWhen"));
      }
      L.push("성함: " + (val("qName") || "(미입력)"));
      if (val("qPhone")) L.push("연락처: " + val("qPhone"));
      if (val("qMemo")) { L.push(""); L.push(val("qMemo")); }
      return L.join("\n");
    }
    function update(){ msg.value = compose(); }
    mSel.addEventListener("change", function(){ fillTrims(); update(); });
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    update();

    function need(){
      if (!val("qName")) { toast("성함을 적어 주세요"); $("qName").focus(); return false; }
      return true;
    }
    $("qSms").addEventListener("click", function(e){
      if (!need()) { e.preventDefault(); return; }
      update();
      /* iOS 는 sms:번호&body=, 안드로이드는 sms:번호?body= — ?&body= 는 둘 다 받는다 */
      this.href = "sms:" + TEL + "?&body=" + encodeURIComponent(msg.value);
    });
    $("qKakao").addEventListener("click", function(e){
      if (!need()) { e.preventDefault(); return; }
      update();
      var text = msg.value, done = function(){ toast("문의 내용을 복사했어요. 카톡 창에 붙여넣기 해서 보내 주세요"); };
      try {
        if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, done);
        else { msg.select(); document.execCommand("copy"); done(); }
      } catch (x) { done(); }
    });
  })();

  /* Scroll reveal — 짧은 요소에만 */
  var risers = document.querySelectorAll(".rise");
  if (reduce || !("IntersectionObserver" in window)) {
    risers.forEach(function(el){ el.classList.add("in"); });
  } else {
    var rio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add("in"); rio.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: "0px 0px -6% 0px" });
    risers.forEach(function(el){ rio.observe(el); });
  }
})();
