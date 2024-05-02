import { LanguageData } from "@/types/LanguageTypes";
import { useLocale } from "next-intl";
import { useRouter } from "next/router";
import { useTransition, ChangeEvent } from "react";


export function useLanguageManager() {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };

    return{
        onSelectChange,
        isPending,
        localActive,
    };

}