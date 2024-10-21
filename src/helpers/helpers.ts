export const getShortText = (text: string, number = 10) => {
    let shortText = text.length >= number ? text.slice(0, 7) + '...' : text

    return shortText;
}