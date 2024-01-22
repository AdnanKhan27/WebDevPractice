/*global QUnit*/

sap.ui.define([
	"project1/controller/TestView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TestView1 Controller");

	QUnit.test("I should test the TestView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
