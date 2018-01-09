import { ApplicationState, Employee as StoreItemsType, Employee } from "src/store";

interface filtredArrayItemType {
    itemHeader: number;
    navItems: Array<navItemType>;
}

interface navItemType {
    name: string;
    link: string;
}

function getFiltredData(items: Array<Employee>, filter: string) {

    let filtredArray: Array<filtredArrayItemType> = [];

    const getDepartment = (deptId: number): number => {
        for (let i = 0; i < filtredArray.length; i++) {
            if (filtredArray[i].itemHeader === deptId) {
                return i;
            }
        }
        return -1;
    }

    const isItemInArray = (id: string): boolean => {
        for (let i = 0; i < filtredArray.length; i++) {
            for (let j = 0; j < filtredArray[i].navItems.length; j++) {
                if (filtredArray[i].navItems[j].link == id) {
                    return true;
                }
            }
        }
        return false;
    }

    let filterWordsArr = filter.toLowerCase().trim().split(' ');
    const getTransformedItems = () => {
        let keyArray: Array<string> = [];

        items.forEach((item: StoreItemsType) => {
            filterWordsArr.forEach((filterWord: string) => {
                if (~item.firstName.toLowerCase().indexOf(filterWord) || ~item.lastName.toLowerCase().indexOf(filterWord) || ~item.skype.toLowerCase().indexOf(filterWord) || ~item.email.toLowerCase().indexOf(filterWord)) {
                    if (!~keyArray.indexOf(item.id)) {
                        keyArray.push(item.id);
                    }
                }
            });
        });

        items.forEach((item: StoreItemsType) => {

            let depInArray: number = getDepartment(item.deptId);
            if (~keyArray.indexOf(item.id)) {
                if (~depInArray) {
                    filtredArray[depInArray].navItems.push({
                        name: `${item.firstName} ${item.lastName}`,
                        link: item.id
                    });
                } else {
                    filtredArray.push({
                        itemHeader: item.deptId,
                        navItems: [{
                            name: `${item.firstName} ${item.lastName}`,
                            link: item.id
                        }]
                    })
                }
            }
        })

        filtredArray = filtredArray.sort((a: any, b: any) => (a.itemHeader - b.itemHeader));

        return filtredArray;
    }

    getTransformedItems();

    return filtredArray;
}

export default getFiltredData;