// api de teste: https://rapidapi.com/dickyagustin/api/text-translator2
export async function traduzirCitacao(
    texto: string,
    idioma: string
): Promise<string> {
    let traducao = "";

    try {
        const resposta = await fetch(
            "https://text-translator2.p.rapidapi.com/translate",
            {
                method: "POST",
                body: new URLSearchParams({
                    text: texto,
                    target_language: idioma,
                    source_language: "pt",
                }),
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "application/gzip",
                    "X-RapidAPI-Key":
                        "0e04fc035fmsh08860d5edc08dbep175764jsna40a51aaebcd",
                    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
                },
            }
        );

        const data = await resposta.json();
        traducao = data.data.translatedText;
    } catch (erro) {
        console.error("Erro ao traduzir citação:", erro);
    }

    return traducao;
}
