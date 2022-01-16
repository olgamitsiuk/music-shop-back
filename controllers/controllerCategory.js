const category = require("../models/category");

exports.seed = function (request, response) {
    category.deleteMany({}, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Delete many OK");
            //res.end('success');
        }
    });

    let one = new category();
    one.name = "Гитары";
    one.nameStr = "guitar";
    one.image = "/storage/category/guitar.png";
    one.subCat = [
        {name : "Элeктроакустические гитары",
            nameStr: "electric-acoustic-guitar" },
        {name: "Электрогитары",
            nameStr: "electric-guitar" },
        {name:"Классические гитары",
            nameStr: "classical-guitar" },
        {name: "Бас-гитары",
            nameStr: "bass-guitar"},
        {name: "Аксессуары для гитар",
            nameStr: "accessories"}  ];
    one.save();
    let two = new category();
    two.name = "Клавишные";
    two.nameStr = "keyboard-instrument";
    two.image = "/storage/category/keyboard-instrument.png";
    two.subCat = [
        {name: "Цыфровые пианино и органы",
            nameStr: "digital-piano"},
        {name: "Синтезаторы",
            nameStr: "synthesizer"},
        {name: "MIDI-клавиатуры",
            nameStr: "midi-keyboard"},
        {name: "Оборудование для клавишных интрументов",
            nameStr: "equipment-keyboard"}];
    two.save();
    let three = new category();
    three.name = "Ударные";
    three.nameStr = "percussion-instrument";
    three.image = "/storage/category/percussion-instrument.png";
    three.subCat = [
            {name: "Акустические ударные",
                nameStr: "acoustic-percussion"},
            {name: "Электронные ударные",
                nameStr: "electronic-percussion"},
            {name: "Тарелки",
                nameStr: "plates"},
            {name: "Аксессуары и комплектующие",
                nameStr: "accessories"}];
    three.save();
    let four = new category();
    four.name = "Духовые";
    four.nameStr = "wind-instrument";
    four.image = "/storage/category/wind-instrument.png";
    four.subCat = [
            {name: "Губные гармошки",
                nameStr: "harmonica"},
            {name: "Медные духовые",
                nameStr: "brass-wind-instruments"},
            {name: "Деревянные духовые",
                nameStr: "wood-wind-instruments"},
            {name: "Аксессуары для духовых инструментов",
                nameStr: "accessories"}];
    four.save();
    let five = new category();
    five.name = "Оборудование";
    five.nameStr = "equipment";
    five.image = "/storage/category/equipment.png";
    five.subCat = [
            {name: "Усилители, комбики, кабинеты",
                nameStr: "amplifiers-combo-cabinets"},
            {name: "Педали эффектов и прцессоры",
                nameStr: "effect-pedals-and-processors"},
            {name: "Тюнеры и метрономы",
                nameStr: "tuners-and-metronomes"},
            {name: "Наушники и микрофоны",
                nameStr: "headphones-and-microphones"}];
    five.save();
    response.send("Ok");
}
exports.getCategory = function (request, response) {
    console.log("Run GET");
    category.find({},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}
exports.getCategoryByName = function (request, response) {
    const name = request.params.name;
    category.find({nameStr: name},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}
