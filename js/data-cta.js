var _DATA_CTA = {
  // --> Config générale
  iraiser_cid : 53,
  iraiser_url : 'don.spa.asso.fr',

  // - Ajout des CTA avec action éclaté pour WoopraTrack
  woopra_interaction :   ['don-IMG', '_ete2015'],

  segments : {
    'PROSPECT': {'arrondiSup':0, 'type': 'addition', 'values':[0,2,5]} ,
    'DONATEUR': {'arrondiSup':0, 'type': 'percent',  'values':[0,25,50]} ,
    'MIDDLE':   {'arrondiSup':0, 'type': 'addition', 'values':[0,25,100]} ,
    'GD':       {'arrondiSup':0, 'type': 'libre'}
  }
};
