// 定数（WEEKDAYS）: 共通で使う値を定義する。慣例的に大文字の名前を付ける。
// 配列（["日", "月", ...]）: 要素を複数持つ構造体。0 始まりの添字（array[0]）で参照する。
//   補足: 興味があればイテレータ（Iterator: forEach などの逐次処理）も知っておくと便利。
const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"]

function zeroPaddingLeft(target, padNumber) {
  // グローバル関数: 今回はよく使う処理をまとめた関数を作成した。名前だけで何をする処理なのか判別できるようにするとよい。
  // 個人の主義としては略語を使わずに書く派（どうせ IDE で名前は補完できるので長くなってもよい）
  return target.toString().padStart(padNumber, '0')
}

function dayToString(integer) {
  // console.log(WEEKDAYS[0]); // => "日"
  // console.log(WEEKDAYS[6]); // => "土"
  return WEEKDAYS[integer];
}
// 上記関数は他の書き方もできる。（厳密には挙動が異なるが）
// 例: アロー関数（3 行とも同じもの。下に行くにつれて省略が強い書き方。）
// let dayToString = (integer) => { return WEEKDAYS[integer] };
// let dayToString = (integer) => WEEKDAYS[integer];
// let dayToString = integer => WEEKDAYS[integer];
// 例: 無名関数
// let dayToString = function (integer) { return WEEKDAYS[integer] };

function alertDate() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const weekday = dayToString(time.getDay());

  // 埋め込み文字列: バッククォート（``）で囲まれた文字列。${} で文字列内で変数を参照できる。
  //   補足: year 等の変数の中身は数値型だが、暗黙の型変換（キャスト）で文字列型に変換された上で埋め込まれている。
  alert(`${year}年${month}月${date}日(${weekday}曜日)`);
}

function alertYYYYMMDD() {
  const time = new Date();
  const year = zeroPaddingLeft(time.getFullYear(), 4);
  const month = zeroPaddingLeft(time.getMonth() + 1, 2);
  const date = zeroPaddingLeft(time.getDate(), 2);

  alert(`${year}${month}${date}`);
}
