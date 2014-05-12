(function (MattM, $, undefined) {
    $(document)
        .ready(function () {
            $('.cv-email').append(MattM.ObfuscateEmail());
        })
        .on('click', '.cv-email a', function (e) {
            e.preventDefault();
            var c = $(this).attr('href').split("").reverse().join("");
            window.location = "mailto:" + c;
        });
    MattM.ObfuscateEmail = function () {
        return "<n uers='zbp.yvnzt@xbbeoryqqvZ.W.ggnZ' ery=\"absbyybj\">zbp.yvnzt@xbbeoryqqvZ.W.ggnZ</n>".replace(/[a-zA-Z]/g, function (c) { return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
    };
})(window.MattM = window.MattM || {}, jQuery);

