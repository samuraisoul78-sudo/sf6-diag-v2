export const metadata = {
  title: "格ゲー認知タイプ診断 | SF6",
  description:
    "全43問からあなたの格闘ゲームでの認知スタイルを分析。MBTI16タイプと、観察・圧力・直感・反応の認知傾向、勝利への美学、メンタルの崩れ方、成長曲線を素質／今の傾向として表示します。",
  openGraph: {
    title: "格ゲー認知タイプ診断 | SF6",
    description:
      "あなたの格ゲー認知スタイルを診断。MBTI×格闘ゲームの5層モデルで、素質と今の傾向を分析します。",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, background: "#0d0f14" }}>{children}</body>
    </html>
  );
}
