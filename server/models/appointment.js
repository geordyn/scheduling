var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Appointment = new Schema({

	title: { type: String },
	start: { type: Date },
	end: { type: Date },
	client: { type: Schema.Types.ObjectId, ref: 'Client' },
	teamMember: { type: Schema.Types.ObjectId, ref: 'Team' },
	description: { type: String },

});




module.exports = mongoose.model('Appointment', Appointment);
