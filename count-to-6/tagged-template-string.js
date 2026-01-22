function escapeHtml(s) {
    return s.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;");
}

function html(strings, ...values) {
    let result = strings[0];

    values.forEach((value, i) => {
        result += escapeHtml(value) + strings[i + 1];
    });

    return result;
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
