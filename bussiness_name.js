let adjectives = {"adj1":"Crazy" , "adj2":"Amazing" , "adj3":"Fire"}
let shops = {"shop1":"Engine" , "shop2":"Foods" , "shop3":"Garments"}
let words = {"word1":"Bros" , "word2":"Limited" , "word3":"Hub"}

function adj_selecter(adjectives) {
    let random_1 = Math.random()
    if (random_1 < 0.33) {
        return adjectives["adj1"]
    }

    else if (0.33 <= random_1 && random_1 < 0.66) {
        return adjectives["adj2"]
    }

    else {
        return adjectives["adj3"]
    }
}

function shop_selecter(shops) {
    let random_2 = Math.random()
    if (random_2 < 0.33) {
        return shops["shop1"]
    }

    else if (0.33 <= random_2 && random_2 < 0.66) {
        return shops["shop2"]
    }

    else {
        return shops["shop3"]
    }
}

function word_selecter(words) {
    let random_3 = Math.random()
    if (random_3 < 0.33) {
        return words["word1"]
    }

    else if (0.33 <= random_3 && random_3 < 0.66) {
        return words["word2"]
    }

    else {
        return words["word3"]
    }
}

let adjective = adj_selecter(adjectives)
let shop = shop_selecter(shops)
let word  = word_selecter(words)

let space = ""
function bussiness_name_generator(adjective , shop , word)
{console.log(adjective.concat(`${space} ${shop}` , `${space} ${word}`))}

bussiness_name_generator(adjective , shop , word)
