import Metas from '../collections/Metas'

Meteor.publish('metas', function(){
    return Metas.find({})
  })