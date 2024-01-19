// const rootCategory1 = new categoriesModel({ name: 'men' });
// const rootCategory2 = new categoriesModel({ name: 'women' });
// rootCategory1.save().then(() => {
//     const subCategory1 = new categoriesModel({ name: 'watches', parent: rootCategory1._id });
//     subCategory1.save();
// });

// rootCategory2.save().then(() => {
//     const subCategory2 = new categoriesModel({ name: 'watches', parent: rootCategory2._id });
//     subCategory2.save();
// });


// const rootCategory1 = await categoriesModel.findOne({ name: 'men' });
// const subcategories = await categoriesModel.find({ parent: rootCategory1._id });
// console.log(rootCategory1)