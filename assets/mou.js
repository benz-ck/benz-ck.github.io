/* ─────────────────────────────────────────────────────────
   MOU 제휴사 임직원 혜택 — 회사 · 단체 이름 검색 (mou.html)
   자료 = assets/mou-data.js (MOU_LIST · MOU_NEED · MOU_ALIAS · MOU_ASOF)
   - 띄어쓰기 · ㈜ · (주) · 주식회사 · 유한회사 · 문장부호는 무시하고 찾는다
   - 영문 대문자는 한글 읽기로도 맞춘다(SK = 에스케이, LG = 엘지, GS = 지에스 …)
   ───────────────────────────────────────────────────────── */
(function(){
  var $ = function(id){ return document.getElementById(id); };
  var q = $("mouQ");
  if (!q || typeof MOU_LIST === "undefined") return;
  var out = $("mouOut"), cnt = $("mouCnt"), x = $("mouX");
  var L2K = { a:"에이", b:"비", c:"씨", d:"디", e:"이", f:"에프", g:"지", h:"에이치", i:"아이", j:"제이", k:"케이", l:"엘", m:"엠",
              n:"엔", o:"오", p:"피", q:"큐", r:"알", s:"에스", t:"티", u:"유", v:"브이", w:"더블유", x:"엑스", y:"와이", z:"지" };
  function norm(s){
    return String(s).toLowerCase()
      .replace(/주식회사|유한회사|유한책임회사|\(주\)|\(유\)|㈜/g, "")
      .replace(/[\s·.,()\[\]\-_&/'"’]+/g, "");
  }
  function kor(s){ return norm(s).replace(/[a-z]/g, function(c){ return L2K[c]; }); }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]; }); }
  var IDX = MOU_LIST.map(function(n){
    var extra = MOU_ALIAS[n] || "";
    return { n:n, a:norm(n + extra), k:kor(n + extra) };
  });
  var asof = MOU_ASOF.replace(/^(\d+)-0?(\d+)-0?(\d+)$/, "$1년 $2월 $3일");
  document.querySelectorAll(".js-mou-asof").forEach(function(el){ el.textContent = asof; });
  document.querySelectorAll(".js-mou-n").forEach(function(el){ el.textContent = MOU_LIST.length.toLocaleString("ko-KR"); });

  var MAX = 60;
  function run(){
    var raw = q.value.trim(), a = norm(raw), k = kor(raw);
    x.hidden = !raw;
    if (a.length < 2 && !/[a-z]{2}/.test(a)) {
      out.innerHTML = ""; cnt.textContent = "회사 · 단체 이름을 두 글자 이상 넣어 보세요"; return;
    }
    var hit = IDX.filter(function(r){ return r.a.indexOf(a) >= 0 || r.k.indexOf(k) >= 0; });
    hit.sort(function(p, r){ return (p.a.indexOf(a) === 0 ? 0 : 1) - (r.a.indexOf(a) === 0 ? 0 : 1) || p.n.length - r.n.length; });
    if (!hit.length) {
      cnt.textContent = "「" + raw + "」 — 리스트에서 찾지 못했어요";
      out.innerHTML = '<div class="mres__none"><b>검색 결과가 없어도 끝이 아니에요.</b>' +
        '<span>계열사 · 자회사 이름으로 등록됐거나, ' + esc(asof) + ' 이후 새로 체결된 곳일 수 있습니다. 회사 이름만 보내 주시면 최신 기준으로 바로 확인해 드립니다.</span>' +
        '<a class="btn btn--gold" href="quote.html">회사 이름 보내고 확인받기 →</a></div>';
      return;
    }
    cnt.textContent = "「" + raw + "」 제휴사 " + hit.length + "곳" + (hit.length > MAX ? " · 앞 " + MAX + "곳만 보여 드려요 — 더 정확히 넣어 보세요" : "");
    out.innerHTML = hit.slice(0, MAX).map(function(r){
      var need = MOU_NEED[r.n], al = MOU_ALIAS[r.n];
      return '<li class="mres__i"><i aria-hidden="true">✓</i><span><b>' + esc(r.n) + '</b>' +
        (al ? '<small>' + esc(al) + '</small>' : '') +
        (need ? '<em>' + esc(need) + ' 필요</em>' : '') + '</span></li>';
    }).join("");
  }
  var t;
  q.addEventListener("input", function(){ clearTimeout(t); t = setTimeout(run, 120); });
  x.addEventListener("click", function(){ q.value = ""; run(); q.focus(); });
  document.querySelectorAll("[data-mq]").forEach(function(b){
    b.addEventListener("click", function(){
      q.value = b.getAttribute("data-mq"); run();
      q.scrollIntoView({ behavior:"smooth", block:"center" });
    });
  });
  var pre = new URLSearchParams(location.search).get("q");
  if (pre) q.value = pre;
  run();
})();
