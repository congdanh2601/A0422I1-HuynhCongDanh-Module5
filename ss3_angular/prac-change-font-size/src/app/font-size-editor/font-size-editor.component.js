"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var FontSizeEditorComponent = /** @class */ (function () {
    function FontSizeEditorComponent() {
        this.fontSize = 14;
    }
    FontSizeEditorComponent.prototype.ngOnInit = function () {
    };
    FontSizeEditorComponent.prototype.changeFontSizeValue = function (fontSize) {
        this.fontSize = fontSize;
    };
    FontSizeEditorComponent = __decorate([
        core_1.Component({
            selector: 'app-font-size-editor',
            templateUrl: './font-size-editor.component.html',
            styleUrls: ['./font-size-editor.component.css']
        })
    ], FontSizeEditorComponent);
    return FontSizeEditorComponent;
}());
exports.FontSizeEditorComponent = FontSizeEditorComponent;
