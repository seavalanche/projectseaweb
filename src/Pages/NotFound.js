import { useLocalization } from '../localization/hooks/useLocalization';

export default function NotFound() {
    const { t } = useLocalization();
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>{t("notfound.oops")}</p>
            <a href="/">{t("notfound.return")}</a>
        </div>
    );
}