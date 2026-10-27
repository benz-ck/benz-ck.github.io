/* ─────────────────────────────────────────────────────────
   AMG GT 구성 페이지 자료 (model.html?m=AMG GT) — 2세대 AMG GT 쿠페(2도어 2+2) 3트림
   - AMG GT 55 4MATIC+: AMG GT Coupé 카탈로그(2025-05-27, 25년식) 장비 · 인증 제원
   - 휠 · 시트 · 트림 · 색상: MY26 AMG GT 오더 가이드라인 v4 (2025-06, GT 55 · GT 63 S E PERFORMANCE 공통)
   - AMG GT 43 · GT 63 S E PERFORMANCE 수치: 메르세데스-벤츠 코리아 국내 출시 발표(GT 43 2026-07). 국내 카탈로그 제원이 없는 칸은 "—"
   - 4도어 AMG GT 43 4MATIC+(X290)는 26년식 재고뿐이고 국내 자료가 없어 트림 카드는 만들지 않고 아래 가격표(extraRows)에만 나온다
   - 가격: 2026-10-27 공식 가격표(27년식 기본, 26년식은 alt)
   오더 가이드라인은 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드는 싣지 않는다(사양 이름만). 휠 사진 두 장(RWD · RWM)은 가이드라인 원본 그림(워터마크 없는 제품 렌더).
   사진은 images/cars/amg-gt/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["AMG GT"] = (function(){
  var P = "images/cars/amg-gt/";
  var ASK = "문의";
  return {
    name: "AMG GT",
    badge: "27년식 Mercedes-AMG GT 쿠페",
    tagline: "2+2 시트를 품은 AMG 의 순수 스포츠카.<br>GT 43 · GT 55 4MATIC+ · GT 63 S E PERFORMANCE.",
    asof: "AMG GT 쿠페 카탈로그 · MY26 오더 가이드라인 · 2026년 국내 출시 발표",
    source: "AMG GT Coupé 카탈로그(2025년 5월) · MY26 AMG GT 오더 가이드라인(2025년 6월) · 메르세데스-벤츠 코리아 출시 발표 · 공식 가격표(2026년 10월 27일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg", P + "hero-5.jpg", P + "hero-6.jpg"],
    bodies: { C: "2도어 쿠페" },
    extraRows: /^AMG GT/,
    lines: { gt43: P + "line-gt43.jpg", gt55: P + "line-gt55.jpg", gt63: P + "line-gt63.jpg" },

    trims: [
      { id:"gt43", name:"Mercedes-AMG GT 43", short:"AMG GT 43", body:"C", line:"Mercedes-AMG", price:149500000, row:"27|AMG GT 43", alt:["26|AMG GT 43 (C192)"],
        engine:"m139", wheel:"ask", upholstery:"ask", wood:"ask", imgNote:"AMG GT 쿠페 · 카탈로그 이미지",
        highlights:["2.0 터보 421마력 · 후륜구동", "F1 기술 전동식 터보차저", "리어 액슬 스티어링"] },
      { id:"gt55", name:"Mercedes-AMG GT 55 4MATIC+", short:"AMG GT 55 4MATIC+", body:"C", line:"Mercedes-AMG", price:212600000, row:"27|AMG GT 55 4M+", alt:["26|AMG GT 55 4M+"],
        engine:"m177", wheel:"rwd", upholstery:"nappa", wood:"h70", imgNote:"AMG GT 쿠페 · 카탈로그 이미지",
        highlights:["V8 바이터보 476마력", "AMG 액티브 라이드 컨트롤", "21인치 AMG 단조 휠"] },
      { id:"gt63", name:"Mercedes-AMG GT 63 S E PERFORMANCE", short:"AMG GT 63 S E PERF.", body:"C", line:"Mercedes-AMG", price:283100000, row:"27|AMG GT 63 S E Performance", alt:["26|AMG GT 63 S E Performance"],
        engine:"m177e", wheel:"rwm", upholstery:"nappa", wood:"h70", imgNote:"AMG GT 쿠페 · 카탈로그 이미지",
        highlights:["시스템 816마력 · 0→100km/h 2.8초", "V8 + 전기 모터 플러그인 하이브리드", "MANUFAKTUR 21인치 단조 휠"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 · "문의" 국내 자료 없음(GT 43) */
    features: [
      { g:"파워트레인 · 섀시", rows:[
        ["엔진", "직렬 4기통 2.0 터보", "V8 4.0 바이터보", "V8 4.0 바이터보 + 전기 모터"],
        ["전동화", "48V 온보드 전기 · 전동식 터보차저", "-", "플러그인 하이브리드 (전기 모터 150kW)"],
        ["변속기", "AMG SPEEDSHIFT MCT 9G", "AMG SPEEDSHIFT MCT 9G", "AMG SPEEDSHIFT MCT 9G"],
        ["구동", "후륜구동", "AMG 퍼포먼스 4MATIC+", "AMG 퍼포먼스 4MATIC+"],
        ["서스펜션", "AMG 스포츠 서스펜션", "AMG 액티브 라이드 컨트롤", "AMG 액티브 라이드 컨트롤"],
        ["리어 액슬 스티어링 (최대 2.5°)", "S", "S", "S"]
      ]},
      { g:"익스테리어", rows:[
        ["휠", ASK, "21인치 AMG 10트윈 스포크 단조", "MANUFAKTUR 21인치 AMG 크로스 스포크 단조"],
        ["디지털 라이트 · 로고 프로젝터", ASK, "S", "S"],
        ["파노라믹 루프 (고정식)", "S", "S", "S"],
        ["외장 색상", ASK, "5가지 + MANUFAKTUR 16가지 (유료)", "5가지 + MANUFAKTUR 16가지 (유료)"]
      ]},
      { g:"인테리어", rows:[
        ["좌석", "2+2 (뒷좌석 접이식)", "2+2 (뒷좌석 접이식)", "2+2 (뒷좌석 접이식)"],
        ["시트", ASK, "나파 가죽 (레드 페퍼/블랙 기본)", "나파 가죽 (레드 페퍼/블랙 기본)"],
        ["앞좌석 열선 · 통풍 · 멀티컨투어 시트", "S", "S", "S"],
        ["앞좌석 메모리 패키지", ASK, "S", "S"],
        ["센터 콘솔 트림", ASK, "AMG 알루미늄", "AMG 알루미늄"],
        ["스티어링 휠", ASK, "AMG 퍼포먼스, 나파 가죽", "AMG 퍼포먼스, 나파 가죽"]
      ]},
      { g:"MBUX · 안전 · 편의", rows:[
        ["12.3인치 계기반 · 11.9인치 세로형 센터 디스플레이", "S", "S", "S"],
        ["MBUX 증강현실 내비게이션 · 헤드업 디스플레이", "S", "S", "S"],
        ["AMG 트랙 페이스", "S", "S", "S"],
        ["부메스터® 서라운드 사운드", ASK, "S", "S"],
        ["드라이빙 어시스턴스 패키지 · 360° 카메라", "S", "S", "S"],
        ["키레스 고 · 핸즈프리 액세스 · 전동 트렁크", ASK, "S", "S"]
      ]}
    ],
    featureNote: "AMG GT 55 · GT 63 S E PERFORMANCE 는 카탈로그 · 오더 가이드라인, AMG GT 43 은 2026년 7월 국내 출시 발표 기준입니다. GT 43 의 휠 · 시트 · 트림 같은 세부 사양은 국내 자료가 아직 없어 「문의」로 두었습니다. 4도어 AMG GT 43 4MATIC+ 는 26년식 재고 모델이라 아래 가격표에서 조건을 보실 수 있습니다.",

    engineNote: "세 트림 모두 AMG SPEEDSHIFT MCT 9단 변속기와 최대 2.5° 리어 액슬 스티어링을 씁니다. GT 43 은 후륜구동, GT 55 · GT 63 S E PERFORMANCE 는 AMG 퍼포먼스 4MATIC+ 사륜구동입니다.",
    engines: {
      m139: { name:"AMG 2.0 터보", kind:"직렬 4기통 2.0리터 터보 + 48V", chips:["421마력", "51.0kg·m", "0→100 4.6초"],
              desc:"F1 기술에서 온 <b>전동식 배기가스 터보차저</b>가 저회전부터 바로 반응하고, 48V 벨트 구동 스타터 제너레이터가 10kW 를 보탭니다. 복합연비 9.3km/ℓ (출시 발표)." },
      m177: { name:"M 177", kind:"AMG 4.0리터 V8 바이터보", chips:["3,982cc", "476마력", "0→100 3.9초"],
              desc:"실린더 헤드 사이에 트윈 스크롤 터보를 둔 V8. 세 개의 냉각 시스템이 엔진을 늘 최적 온도로 지키고, <b>최고속도 295km/h</b> 입니다(카탈로그)." },
      m177e: { name:"M 177 + 전기 모터", kind:"V8 바이터보 플러그인 하이브리드", chips:["시스템 816마력", "0→100 2.8초", "최고 320km/h"],
              desc:"612마력 V8 바이터보에 150kW 전기 모터를 더한 2세대 AMG GT 의 최상위 모델. 시스템 최대토크 <b>144.8kg·m</b> (출시 발표)." }
    },

    specs: { rows: [
      ["엔진", "직렬 4기통 2.0 터보", "V8 4.0 바이터보", "V8 4.0 바이터보 + 전기 모터"],
      ["배기량", "2.0리터", "3,982cc", "3,982cc"],
      ["최고출력", "421마력", "476마력", "시스템 816마력"],
      ["최대토크", "51.0kg·m", "71.4kg·m", "시스템 144.8kg·m"],
      ["0→100km/h", "4.6초", "3.9초", "2.8초"],
      ["최고속도", "280km/h", "295km/h", "320km/h"],
      ["복합연비 (등급)", "9.3km/ℓ", "6.5km/ℓ (5등급)", "—"],
      ["도심 · 고속 연비", "—", "5.5 · 8.3km/ℓ", "—"],
      ["CO₂ 배출", "—", "271g/km", "—"],
      ["공차중량", "—", "1,910kg", "—"],
      ["전장 · 전폭 · 전고", "—", "4,730 · 1,985 · 1,355mm", "—"],
      ["휠베이스 · 최소회전반경", "—", "2,700mm · 6.3m", "—"],
      ["트렁크", "최대 675ℓ", "351~675ℓ", "—"]
    ] },
    specNote: "AMG GT 55 4MATIC+ 는 국내 카탈로그의 인증 차량 제원, AMG GT 43 · GT 63 S E PERFORMANCE 는 메르세데스-벤츠 코리아 출시 발표 수치입니다. 비어 있는 칸(—)은 공식 자료가 나오는 대로 채워 넣겠습니다.",

    wheels: {
      ask: { name:"AMG 경량 휠 (세부 사양 문의)" },
      rwd: { name:"21인치 AMG 10트윈 스포크 단조 휠", img:P + "wheel-rwd.jpg" },
      rwm: { name:"MANUFAKTUR 21인치 AMG 크로스 스포크 단조 휠", img:P + "wheel-rwm.jpg" }
    },
    upholstery: {
      ask: { name:"시트 (색상 · 소재 문의)", colors:[] },
      nappa: { name:"나파 가죽", colors:[
        { name:"레드 페퍼/블랙 (기본)", img:P + "seat-807.jpg" },
        { name:"블랙", img:P + "seat-801.jpg" },
        { name:"시에나 브라운/블랙", img:P + "seat-804.jpg" },
        { name:"세이지 그레이/블랙", img:P + "seat-808.jpg" } ]}
    },
    woods: {
      h70: { name:"AMG 알루미늄 트림", img:P + "trim-h70.jpg" },
      h73: { name:"AMG 카본 트림", img:P + "trim-h73.jpg", note:"유료 옵션" },
      h94: { name:"MANUFAKTUR 블랙 크롬 트림", img:P + "trim-h94.jpg", note:"유료 옵션" },
      h97: { name:"오픈 포어 그레이 우드 트림", img:P + "trim-h97.jpg", note:"유료 옵션" },
      h98: { name:"오픈 포어 브라운 애쉬 우드 트림, 알루미늄 라인", img:P + "trim-h98.jpg", note:"유료 옵션" },
      ask: { name:"AMG GT 43 실내 트림 (문의)" }
    },
    extraCfg: [
      { title:"21인치 AMG 단조 휠", sub:"GT 55 4MATIC+ · GT 63 S E PERFORMANCE — 트림에 따라 무료 · 유료", items:[
        { name:"10트윈 스포크", img:P + "wheel-rwd.jpg", base:true, note:"GT 55 기본" },
        { name:"MANUFAKTUR 크로스 스포크", img:P + "wheel-rwm.jpg", base:true, note:"GT 63 S E PERFORMANCE 기본" },
        { name:"5트윈 스포크", img:P + "wheel-rwi.jpg", note:"무료 선택" },
        { name:"10트윈 스포크, 블랙", img:P + "wheel-rwe.jpg" },
        { name:"5트윈 스포크, 블랙", img:P + "wheel-rwk.jpg" },
        { name:"크로스 스포크, 블랙", img:P + "wheel-rwl.jpg" } ]},
      { title:"MANUFAKTUR 나파 가죽", sub:"다이아몬드 퀼팅 · 선택 사양", items:[
        { name:"요트 블루/블랙", img:P + "seat-952.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"토바코 브라운/블랙", img:P + "seat-954.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"사바나 베이지/블랙", img:P + "seat-955.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"셰이디 그린/블랙", img:P + "seat-956.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"미스틱 레드/블랙", img:P + "seat-957.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"로제 그레이/블랙", img:P + "seat-958.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"클래식 레드/블랙", img:P + "seat-967.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"트러플 브라운/블랙", img:P + "seat-824.jpg", note:"유료 옵션" },
        { name:"크리스탈 화이트/블랙", img:P + "seat-825.jpg", note:"유료 옵션" },
        { name:"마키아토 베이지/티타늄 그레이", img:P + "seat-835.jpg", note:"유료 옵션" } ]}
    ],
    /* 오더 가이드라인 · 카탈로그: 기본 5가지(옵시디안 블랙 기본, 나머지 무료) + MANUFAKTUR 16가지(유료) */
    colors: (function(){
      function c(name, code, mfk){ var o = { name:name, img:P + "color-" + code + ".jpg" }; if (mfk) o.mfk = true; return o; }
      return [
        c("옵시디안 블랙", "197u"), c("스펙트럴 블루", "970u"), c("썬 옐로우", "914u"), c("하이테크 실버", "922u"), c("셀레나이트 그레이", "992u"),
        c("MANUFAKTUR 나이트 블랙 마그노", "056u", 1), c("MANUFAKTUR 실리콘 그레이", "190u", 1), c("MANUFAKTUR 그라파이트 그레이 마그노", "818u", 1),
        c("MANUFAKTUR 하이테크 실버 마그노", "734u", 1), c("MANUFAKTUR 알파인 그레이 솔리드", "956u", 1), c("MANUFAKTUR 오팔라이트 화이트 브라이트", "885u", 1),
        c("MANUFAKTUR 오팔라이트 화이트 마그노", "659u", 1), c("MANUFAKTUR 데저트 샌드", "464u", 1), c("MANUFAKTUR 빈티지 블루 솔리드", "934u", 1),
        c("MANUFAKTUR 스펙트럴 블루 마그노", "593u", 1), c("MANUFAKTUR 하이퍼 블루 마그노", "964u", 1), c("MANUFAKTUR 그린 헬 마그노", "376u", 1),
        c("MANUFAKTUR 코퍼 오렌지 마그노", "658u", 1), c("MANUFAKTUR 오렌지 플레임", "379u", 1), c("MANUFAKTUR 파타고니아 레드 브라이트", "993u", 1),
        c("MANUFAKTUR 루벨라이트 레드", "660u", 1)
      ];
    })()
  };
})();
