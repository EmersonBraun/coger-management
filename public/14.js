(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/numerator/numerations/Option.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/numerator/numerations/Option.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_msg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/msg */ "./resources/vue/config/msg.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Index',
  data: function data() {
    return {
      option: '',
      search: '',
      formModal: false,
      hasMsg: false,
      valid: false,
      registry: {},
      msg: {},
      headers: [{
        text: 'Responsável',
        align: 'start',
        value: 'responsible'
      }, {
        text: 'Ref',
        value: 'ref'
      }, {
        text: 'Ano',
        value: 'year'
      }, {
        text: 'Descrição',
        value: 'description'
      }, {
        text: 'Sequência',
        value: 'sequence'
      }, {
        text: 'Ações',
        value: 'actions',
        sortable: false
      }],
      items: []
    };
  },
  methods: {
    getAll: function getAll() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$axios.get("/api/numerations/".concat(_this.option));

              case 2:
                res = _context.sent;
                _this.items = res.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    create: function create() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.$refs.form.validate()) {
                  _context2.next = 7;
                  break;
                }

                _this2.registry.option = _this2.option;
                _context2.next = 4;
                return _this2.$axios.post('/api/numerations', _this2.registry);

              case 4:
                res = _context2.sent;

                _this2.getMsg(res.data, 'create');

                _this2.clearAll();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    edit: function edit(registry) {
      this.registry = registry;
      this.formModal = true;
    },
    update: function update() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var id, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = _this3.registry.id;

                if (!(_this3.$refs.form.validate() && id)) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 4;
                return _this3.$axios.put("/api/numerations/".concat(id), _this3.registry);

              case 4:
                res = _context3.sent;

                _this3.getMsg(res.data, 'update');

                _this3.clearAll();

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    remove: function remove(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!confirm('Você tem certeza?')) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 3;
                return _this4.$axios["delete"]("/api/numerations/".concat(id));

              case 3:
                res = _context4.sent;

                _this4.getMsg(res.data, 'delete');

                _this4.clearAll();

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getMsg: function getMsg(data, type) {
      this.hasMsg = true;
      this.msg.type = data ? 'success' : 'error';
      if (type === 'create') this.msg.message = this.msg.type === 'error' ? 'Erro ao inserir' : "N\xB0 ".concat(data.ref, "/").concat(data.year, " (sequ\xEAncia: ").concat(data.sequence, ")");else this.msg.message = _config_msg__WEBPACK_IMPORTED_MODULE_1__["msg"][type][this.msg.type];
    },
    clearAll: function clearAll() {
      this.registry = {};
      this.formModal = false;
      this.getAll();
    },
    closeModal: function closeModal() {
      this.registry = {};
      this.formModal = false;
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this5.option = _this5.$route.params.option;

              _this5.getAll();

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/numerator/numerations/Option.vue?vue&type=template&id=6ee4cfe5&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/numerator/numerations/Option.vue?vue&type=template&id=6ee4cfe5& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _vm.hasMsg
        ? _c("v-alert", { attrs: { type: _vm.msg.type, dismissible: "" } }, [
            _vm._v(_vm._s(_vm.msg.message))
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-magnify",
                  label: "Busca",
                  "single-line": "",
                  "hide-details": ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-data-table", {
            attrs: {
              headers: _vm.headers,
              items: _vm.items,
              search: _vm.search
            },
            scopedSlots: _vm._u([
              {
                key: "item.actions",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-icon",
                      {
                        staticClass: "mr-2",
                        attrs: { small: "" },
                        on: {
                          click: function($event) {
                            return _vm.edit(item)
                          }
                        }
                      },
                      [_vm._v("mdi-pencil")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-icon",
                      {
                        attrs: { small: "" },
                        on: {
                          click: function($event) {
                            return _vm.remove(item.id)
                          }
                        }
                      },
                      [_vm._v("mdi-delete")]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { block: "", color: "primary" },
              on: {
                click: function($event) {
                  _vm.formModal = true
                }
              }
            },
            [
              _vm._v("\n      Inserir\n      "),
              _c("v-icon", [_vm._v("mdi-plus")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "" },
          model: {
            value: _vm.formModal,
            callback: function($$v) {
              _vm.formModal = $$v
            },
            expression: "formModal"
          }
        },
        [
          _c(
            "v-card",
            { staticClass: "elevation-12" },
            [
              _c(
                "v-toolbar",
                { attrs: { color: "primary", dark: "", flat: "" } },
                [
                  _c("v-toolbar-title", [
                    _vm._v(_vm._s(_vm.registry.id ? "Editar" : "Inserir"))
                  ]),
                  _vm._v(" "),
                  _c("v-spacer")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-form",
                    {
                      ref: "form",
                      attrs: { "lazy-validation": "" },
                      model: {
                        value: _vm.valid,
                        callback: function($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid"
                      }
                    },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Responsável",
                          "prepend-icon": "mdi-account",
                          type: "text",
                          rules: [
                            function(v) {
                              return !!v || "Responsável é obrigatório"
                            }
                          ],
                          required: ""
                        },
                        model: {
                          value: _vm.registry.responsible,
                          callback: function($$v) {
                            _vm.$set(_vm.registry, "responsible", $$v)
                          },
                          expression: "registry.responsible"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          label: "Descrição",
                          "prepend-icon": "mdi-card-text-outline",
                          type: "text",
                          rules: [
                            function(v) {
                              return !!v || "Descrição é obrigatória"
                            }
                          ],
                          required: ""
                        },
                        model: {
                          value: _vm.registry.description,
                          callback: function($$v) {
                            _vm.$set(_vm.registry, "description", $$v)
                          },
                          expression: "registry.description"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "error" },
                      on: { click: _vm.closeModal }
                    },
                    [_vm._v("Cancelar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.registry.id ? _vm.update() : _vm.create()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.registry.id ? "Editar" : "Inserir") +
                          " \n        "
                      ),
                      _c("v-icon", [_vm._v("mdi-plus")])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/vue/config/msg.js":
/*!*************************************!*\
  !*** ./resources/vue/config/msg.js ***!
  \*************************************/
/*! exports provided: msg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msg", function() { return msg; });
var msg = {
  create: {
    success: 'Inserido com sucesso',
    error: 'Erro ao inserir'
  },
  update: {
    success: 'Atualizado com sucesso',
    error: 'Erro ao atualizar'
  },
  "delete": {
    success: 'Apagado com sucesso',
    error: 'Erro ao apagar'
  }
};

/***/ }),

/***/ "./resources/vue/pages/numerator/numerations/Option.vue":
/*!**************************************************************!*\
  !*** ./resources/vue/pages/numerator/numerations/Option.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Option_vue_vue_type_template_id_6ee4cfe5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Option.vue?vue&type=template&id=6ee4cfe5& */ "./resources/vue/pages/numerator/numerations/Option.vue?vue&type=template&id=6ee4cfe5&");
/* harmony import */ var _Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option.vue?vue&type=script&lang=js& */ "./resources/vue/pages/numerator/numerations/Option.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Option_vue_vue_type_template_id_6ee4cfe5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Option_vue_vue_type_template_id_6ee4cfe5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/pages/numerator/numerations/Option.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vue/pages/numerator/numerations/Option.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/vue/pages/numerator/numerations/Option.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Option.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/numerator/numerations/Option.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/pages/numerator/numerations/Option.vue?vue&type=template&id=6ee4cfe5&":
/*!*********************************************************************************************!*\
  !*** ./resources/vue/pages/numerator/numerations/Option.vue?vue&type=template&id=6ee4cfe5& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_template_id_6ee4cfe5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Option.vue?vue&type=template&id=6ee4cfe5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/numerator/numerations/Option.vue?vue&type=template&id=6ee4cfe5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_template_id_6ee4cfe5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_template_id_6ee4cfe5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);