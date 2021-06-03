var AddressAutocomplete = function() {
  "use strict";
  var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    t = (function() {
      function e(e) {
        this.value = e
      }

      function t(t) {
        function o(r, a) {
          try {
            var i = t[r](a),
              s = i.value;
            s instanceof e ? Promise.resolve(s.value).then(function(e) {
              o("next", e)
            }, function(e) {
              o("throw", e)
            }) : n(i.done ? "return" : "normal", i.value)
          } catch (e) {
            n("throw", e)
          }
        }

        function n(e, t) {
          switch (e) {
            case "return":
              r.resolve({
                value: t,
                done: !0
              });
              break;
            case "throw":
              r.reject(t);
              break;
            default:
              r.resolve({
                value: t,
                done: !1
              })
          }(r = r.next) ? o(r.key, r.arg): a = null
        }
        var r, a;
        this._invoke = function(e, t) {
          return new Promise(function(n, i) {
            var s = {
              key: e,
              arg: t,
              resolve: n,
              reject: i,
              next: null
            };
            a ? a = a.next = s : (r = a = s, o(e, t))
          })
        }, "function" != typeof t.return && (this.return = void 0)
      }
      "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function() {
        return this
      }), t.prototype.next = function(e) {
        return this._invoke("next", e)
      }, t.prototype.throw = function(e) {
        return this._invoke("throw", e)
      }, t.prototype.return = function(e) {
        return this._invoke("return", e)
      }
    }(), function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }),
    o = function() {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
      }
    }();
  return function() {
    function n(o, r) {
      var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if (t(this, n), this.element = document.querySelector(o), !this.element) throw new Error("The element you specified is not a valid element. You should attach an input using a class '.some-class' or an ID '#some-id'.");
      var i = {
        types: ["geocode"]
      };
      if ("function" == typeof r) this.callback = r, this.options = i;
      else {
        if ("object" !== (void 0 === r ? "undefined" : e(r))) throw new Error('To be able to use extra options, the type of the second parameter must be "object" and the type of the third parameter must be "function".');
        this.options = Object.assign({}, i, r), this.callback = a
      }
      this.extractAddress = this.extractAddress.bind(this), this.getUsersLocation = this.getUsersLocation.bind(this), this.handle()
    }
    return o(n, [{
      key: "handle",
      value: function() {
        var e = this;
        document.addEventListener("readystatechange", function() {
          e.initializeAutocomplete(), e.element.addEventListener("focus", e.getUsersLocation)
        })
      }
    }, {
      key: "initializeAutocomplete",
      value: function() {
        this.autocomplete = new google.maps.places.Autocomplete(this.element, this.options), this.autocomplete.addListener("place_changed", this.extractAddress)
      }
    }, {
      key: "extractAddress",
      value: function() {
        for (var e = {
            street_number: "short_name",
            route: "long_name",
            locality: "long_name",
            administrative_area_level_1: "short_name",
            administrative_area_level_2: "short_name",
            country: "long_name",
            postal_code: "short_name"
          }, t = this.autocomplete.getPlace(), o = t.address_components, n = t.formatted_address, r = t.geometry.location, a = r.lat, i = r.lng, s = {
            streetNumber: "",
            streetName: "",
            cityName: "",
            countyName: "",
            stateAbbr: "",
            zipCode: "",
            coordinates: {
              lat: a(),
              lng: i()
            }
          }, c = 0; c < o.length; c++) {
          var l = o[c].types[0];
          if (e[l]) switch (l) {
            case "street_number":
              s.streetNumber = o[c].long_name;
              break;
            case "route":
              s.streetName = o[c].long_name;
              break;
            case "locality":
              s.cityName = o[c].long_name;
              break;
            case "administrative_area_level_1":
              s.stateAbbr = o[c].short_name, s.state = o[c].long_name;
              break;
            case "administrative_area_level_2":
              s.countyName = o[c].short_name.replace(/county|parish/gi,'');
              break;
            case "postal_code":
              s.zipCode = o[c].long_name;
              break;
            case "country":
              s.countryAbbr = o[c].short_name, s.country = o[c].long_name
          }
        }
        var u = Object.assign({}, s, {
          formattedAddress: n
        });
        this.callback(u, t)
      }
    }, {
      key: "getUsersLocation",
      value: function() {
        var e = this;
        navigator.geolocation && navigator.geolocation.getCurrentPosition(function(t) {
          var o = {
              lat: t.coords.latitude,
              lng: t.coords.longitude
            },
            n = new google.maps.Circle({
              center: o,
              radius: t.coords.accuracy
            });
          e.autocomplete.setBounds(n.getBounds())
        })
      }
    }]), n
  }()
}();