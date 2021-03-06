export const colors = [
    { id: '1', color: 'blue' },
    { id: '2', color: 'green' },
    { id: '3', color: 'orange' },
    { id: '4', color: 'red' },
    { id: '5', color: 'purple' },
    { id: '6', color: 'purple-light' },
    { id: '7', color: 'blue-light' },
];

export const defaultColor = (color) => {
    if (!color) return colors[0];
    const colorObj = colors.find((item) => item.color === color);
    return colorObj;
};
