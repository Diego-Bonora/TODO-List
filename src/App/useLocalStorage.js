import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItems;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItems = initialValue;
                } else {
                    parsedItems = JSON.parse(localStorageItem);
                    setItem(parsedItems)
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true)
            }
        }, 2000, []);
    });

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem)
    };

    return {
        item,
        saveItem,
        loading,
        error
    };
};

export { useLocalStorage }