


export const formatMoney = (value: number) => {

    const formatted = Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
    }).format(value);

    const noDollar = formatted.replace('$', '')

    if (value === 0)
        return noDollar;

    return value >= 1 ? formatted : `${noDollar}¢`


}