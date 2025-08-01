import { NavLink } from 'react-router-dom';
import { useLocalization } from '../localization/hooks/useLocalization';

export default function NotFound() {
    const { t } = useLocalization();
    return (
        <div className="underconstruction">
            <h1>Under Construction</h1>
            <p>{t("notfound.oops")}</p>
            < NavLink to='/'>{t("notfound.return")}</NavLink>
        </div>
    );
}