import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../types/common";

export const Home = (): FunctionComponent => {
	const { t, i18n } = useTranslation();

	const onTranslateButtonClick = async (): Promise<void> => {
		if (i18n.resolvedLanguage === "en") {
			await i18n.changeLanguage("id");
		} else {
			await i18n.changeLanguage("en");
		}
	};

	return (
		<div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center">
			<p className="text-white text-6xl">{t("home.greeting")}</p>
			<button
				type="submit"
				onClick={onTranslateButtonClick}
				className="px-4 py-2 bg-slate-50 rounded mt-4"
			>
				translate
			</button>
		</div>
	);
};
