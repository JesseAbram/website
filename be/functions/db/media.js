exports.getMedia = async (
    database
  ) => {
    const response = await database.ref().once('value');
    console.log('response', response.val())
    return response.val();
  }



  exports.updateViews = async (
    database,
    currentViews
  ) => {
    const updates = {}
    const path = `Media/Views`
    const newViews = currentViews + 1
    updates[path] = newViews
    return database.ref().update(updates)
  }