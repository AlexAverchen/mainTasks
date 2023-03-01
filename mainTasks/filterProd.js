class Products {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

let nike = new Products("Nike", 1500, 10, "Style. Fashion. For the young")
let puma = new Products("Puma", 1300, 32, "New sensations")
let adidas = new Products("Adidas", 1720, 15, "Not abibas. Not adibas. Not even adiboss")
let crocs = new Products("Crocs", 2100, 8, "Comfortable")
let chocolate = new Products("Milka", 80, 120, "Yes, it's not just shoes")
let kebab = new Products("Kebab", 180, 40, "Good choice for BBQ")
let mazda = new Products("Mazda", 1000000, 3, "Like in Greece, we have everything")
let cd = new Products("CD", 20, 213, "What year is it now?")
let bike = new Products("Bike", 500000, 5, "Mountain bike")
let sedan  = new Products("Sedan", 80, 120, "Unknown brand")

let products = {adidas, puma, nike, crocs, chocolate, kebab, mazda, cd, bike, sedan};


let filter = prompt('Фильтр:', '');

function filterProduct(filter, product) { 

    var filter_arr = filter.split("&"); 
    var final_filter = [];

    filter_arr.forEach(MakeFilter);
    function MakeFilter (item, index, arr) { 
        var temparr2 = []; 
        let temparr = item.split("-"); 
        
        if (temparr.length==2) {  

            let sign = temparr[1].match(/\D/g).join(''); 
            let filter_value = temparr[1].match(/\d+/g).join(); 

        temparr2 = {
                field: temparr[0],
                condition: sign,
                value: filter_value,
            }
        } else {

        temparr2 = {
                field: temparr[0],
                condition: temparr[1],
                value: temparr[2],
            }
        }
        final_filter.push(temparr2);
    }


    var filtered_result = []; 
    Object.keys(product).forEach(key => {
        let is_filtered = true; 

        final_filter.forEach(
            
            function (item) {
                if(item["field"] == "name" || item["field"] == "description") { 
                    switch (item["condition"]) { 
                        case "contains":
                            if(!(product[key][item["field"]].includes(item["value"]))) { 
                                is_filtered = false; 
                            }
                            break;
                        case "ends":
                            if(!(product[key][item["field"]].endsWith(item["value"]))) { 
                                is_filtered = false;  
                            }
                            break;
                        case "starts":
                            if(!(product[key][item["field"]].startWith(item["value"]))) {
                                is_filtered = false;
                            }
                            break;
                    }
                }
                else {
                    switch (item["condition"]) {
                        case ">":
                            if(!(product[key][item["field"]] > item["value"])){
                                is_filtered = false;
                            }
                            break;
                        case "<":
                            if(!(product[key][item["field"]] < item["value"])){
                                is_filtered = false;
                            }
                            break;
                        case ">=":
                            if(!(product[key][item["field"]] >= item["value"])){
                                is_filtered = false;
                            }
                            break;
                        case "<=":
                            if(!(product[key][item["field"]] <= item["value"])){
                                is_filtered = false;
                            }
                            break;
                        case "=":
                            if(!(product[key][item["field"]] == item["value"])){
                                is_filtered = false;
                            }
                            break;
                    }

                }

            }

        );
        if(is_filtered){
         filtered_result.push(product[key]); 
        };
    });
    return filtered_result;
}


console.log(filterProduct(filter, products))