import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
    app.use(
        createProxyMiddleware({
            target: "https://api.modumanito.site/",
            changeOrigin: true,
        })
    );
}
