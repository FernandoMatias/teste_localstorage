Ext.define('Touch2Demo.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
	routes: {
	    '': 'showContatosList',
	    'index.html': 'showContatosList'
	},
	refs: {
	    contatosList: {
		xtype: 'contatosList',
		selector: 'contatosList',
		autoCreate: true
	    },
	    contatosForm: {
		xtype: 'contatosform',
		selector: 'contatosform',
		autoCreate: true
	    },
	    coletasForm: {
		xtype: 'coletasform',
		selector: 'coletasform',
		autoCreate: true
	    },
	    coletasList: {
		xtype: 'coletasList',
		selector: 'coletasList',
		autoCreate: true
	    },
	    salvarContatoBtn: 'button[action=salvarContato]',
	    salvarColetaBtn: 'button[action=salvarColeta]',
	    deletarContatoBtn: 'button[action=deletarContato]',
	    deletarColetaBtn: 'button[action=deletarColeta]',
	    toolbarFormContato: '#toolbarFormContato',
	    ToolbarFormColeta: '#toolbarFormColeta'



	},
	control: {
	    'button[action=mudarPainel1]': {
		tap: 'showContatosList'
	    },
	    'button[action=novoContato]': {
		tap: 'showContatosForm'
	    },
	    'button[action=voltarContatosList]': {
		tap: 'showContatosList'
	    },
	    'button[action=voltarColetasList]': {
		tap: 'showColetasList'
	    },
	    'button[action=novaColeta]': {
		tap: 'showColetasForm'
	    },
	    contatosList: {
		itemtap: 'showContatosForm'
	    },
	    coletasList: {
		itemtap: 'showColetasForm'
	    },
	    salvarContatoBtn: {
		tap: 'salvarContato'
	    },
	    salvarColetaBtn: {
		tap: 'salvarColeta'
	    },
	    deletarContatoBtn: {
		tap: 'deletarContato'
	    },
	    deletarColetaBtn: {
		tap: 'deletarColeta'
	    }
	}
    },
    showContatosList: function () {
	Ext.Viewport.setActiveItem(this.getContatosList());
    },
    showColetasList: function () {
	Ext.Viewport.setActiveItem(this.getColetasList());
    },
    showContatosForm: function (view, index, target, record, evt, opts) {
	if (record && record.data) {
	    this.getContatosForm().setRecord(record);
	    this.getToolbarFormContato().setTitle(record.get('nome'));
	    this.getDeletarContatoBtn().show();
	} else {
	    this.getContatosForm().reset();
	    this.getContatosForm().setRecord(null);
	    this.getToolbarFormContato().setTitle('Criando novo contato');
	    this.getDeletarContatoBtn().hide();
	}
	Ext.Viewport.setActiveItem(this.getContatosForm());
    },
    showColetasForm: function (view, index, target, record, evt, opts) {
	if (record && record.data) {
	    this.getColetasForm().setRecord(record);
	    this.getToolbarFormColeta().setTitle(record.get('nome'));
	    this.getDeletarColetaBtn().show();
	} else {
	    this.getColetasForm().reset();
	    this.getColetasForm().setRecord(null);
	    this.getToolbarFormColeta().setTitle('Criando novo contato');
	    this.getDeletarColetaBtn().hide();
	}
	Ext.Viewport.setActiveItem(this.getColetasForm());
    },
    salvarContato: function () {
	var form = this.getContatosForm(),
		contato = Ext.create('Touch2Demo.model.Contato', form.getValues()),
		store = Ext.getStore('Contato');

	console.log("valor: " + form.getRecord());
	if (form.getRecord() !== null) {
	    var record = store.findRecord('id', form.getRecord().getId());
	    record.set(form.getValues());
	    console.log('Contato editado com sucesso');
	} else {
	    store.add(contato);
	    console.log(store);
	}

	this.showContatosList();
    },
    salvarColeta: function () {
	var form = this.getColetasForm(),
		coleta = Ext.create('Touch2Demo.model.Coleta', form.getValues()),
		store = Ext.getStore('Coletas');

	if (form.getRecord() !== null) {
	    var record = store.findRecord('id', form.getRecord().getId());
	    record.set(form.getValues());
	    Ext.Msg.alert('Alterando coleta', 'Coleta alterada com sucesso.', Ext.emptyFn);
	} else {
	    store.add(coleta);
	    Ext.Msg.alert('Criando coleta', 'Coleta criada com sucesso.', Ext.emptyFn);
	}

	this.showColetasList();
    },
    deletarContato: function () {
	Ext.Msg.confirm(
		'Deletar contato',
		'Tem certeza que deseja deletar este contato?',
		function (btn) {
		    if (btn == 'yes') {
			Ext.getStore('Contato').remove(this.getContatosForm().getRecord());
			this.showContatosList();
		    }
		},
		this
		);
    },
    deletarColeta: function () {
	Ext.Msg.confirm(
		'Deletar coleta',
		'Tem certeza que deseja deletar esta coleta?',
		function (btn) {
		    if (btn == 'yes') {
			Ext.getStore('Coletas').remove(this.getColetasForm().getRecord());
			this.showColetasList();
		    }
		},
		this
		);
    }
//	 showColetasForm: function(){
//		Ext.Viewport.setActiveItem(this.getColetasForm(), {type: 'slide', direction: 'left' });
//	}
});


//myViewport.animateActiveItem(mainPanel, {type: 'slide', direction: 'left'});