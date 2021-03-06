

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const URL = {
//     DOMAIN: "https://seriesfree.to/",
//     SEARCH: (title) => {
//         return `https://seriesfree.to/search/${title}`;
//     },
//     DOMAIN_DECODE: '',
//     HEADERS: (referer) => {
//         return {
//             'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
//             'referer': referer
//         }
//     }
// };


// class Seriesfree {
//     constructor(props) {
//         this.libs = props.libs;
//         this.movieInfo = props.movieInfo;
//         this.settings = props.settings;
//         this.state = {};
//     }


//     async searchDetail() {
//         const {
//             httpRequest,
//             cheerio,
//             stringHelper
//         } = this.libs;
//         let {
//             title,
//             year,
//             season,
//             episode,
//             type
//         } = this.movieInfo;

//         let movieflixter = this;

//         let detailUrl = false;
//         let videoUrl = false;
//         let tvshowVideoUrl = false;

//         try {

//             let urlSearch = URL.SEARCH(title);
//             let dataSearch = await httpRequest.getHTML(urlSearch);
//             let $ = cheerio.load(dataSearch);

//             let itemSearch = $('.container .cf .separate:nth-child(4)');
//             let titleVal = itemSearch.find('h2').text();
//             let linkDetailVal = 'https://seriesfree.to' + itemSearch.find('a').attr('href');

//             if (titleVal.toLowerCase().search(title.toLowerCase()) !== -1) {
//                 detailUrl = linkDetailVal;
//             }

//             if (detailUrl) {
//                 let searchLink = await httpRequest.getHTML(detailUrl);
//                 let $_2 = cheerio.load(searchLink);
//                 let totalLinks = $_2('.seasons-grid a');
//                 totalLinks.each(function () {
//                     let checkCondition = $(this).attr('href');
//                     if (checkCondition.indexOf(`s${season}_e${episode}`) !== -1) {
//                         detailUrl = 'https://seriesfree.to' + checkCondition;
//                     }
//                 });
//             }
//             this.state.detailUrl = detailUrl;
//         } catch (error) {
//             console.log(String(error));
//         }


//         return;
//     }

//     async getHostFromDetail() {
//         const {
//             httpRequest,
//             cheerio,
//             qs
//         } = this.libs;
//         const {
//             title,
//             year,
//             season,
//             episode,
//             type
//         } = this.movieInfo;
//         if (!this.state.detailUrl) throw new Error("NOT_FOUND");

//         let hosts = [];
//         let detailUrl = this.state.detailUrl;
//         let htmlDetail = await httpRequest.getHTML(this.state.detailUrl);
//         let $ = cheerio.load(htmlDetail);

//         let servers = $(".tabs .links tr td:nth-child(2) a");
//         let sources = [];
//         servers.each(function () {
//             let onclick = 'https://seriesfree.to' + $(this).attr('href');
//             sources.push(onclick);
//         });

//         let sourcesPromise = sources.map(async (link) => {
//             let originLink = await httpRequest.getHTML(link);
//             let $_1 = cheerio.load(originLink);

//             let linkDetail = $_1('#app .serie-details div:nth-child(2) a').attr('href');
//             let hostsList = ["openload", "streamango", "speedvid"];

//             for (let i = 0; i < hostsList.length; i++) {
//                 if (linkDetail) {
//                     if (linkDetail.indexOf(hostsList[i]) !== -1 && hosts.length < 20) {
//                         hosts.push({
//                             provider: {
//                                 url: detailUrl,
//                                 name: "seriesfree"
//                             },
//                             result: {
//                                 file: linkDetail,
//                                 label: "embed",
//                                 type: "embed"
//                             }
//                         });
//                     }
//                 }
//             }
//         });

//         await Promise.all(sourcesPromise);
//         this.state.hosts = hosts;
//     }

// }

// thisSource.function = async (libs, movieInfo, settings) => {

//     const httpRequest = libs.httpRequest;

//     const source = new Seriesfree({
//         libs: libs,
//         movieInfo: movieInfo,
//         settings: settings
//     });

//     let bodyPost = {
//         name_source: 'seriesfree',
//         is_link: 0,
//         type: movieInfo.type,
//         season: movieInfo.season,
//         episode: movieInfo.episode,
//         title: movieInfo.title,
//         year: movieInfo.year
//     };

//     await source.searchDetail();

//     if (!source.state.detailUrl) {
//         bodyPost.is_link = 0;
//     } else {
//         bodyPost.is_link = 1;
//     }
//     await source.getHostFromDetail();

//     if (source.state.hosts.length == 0) {
//         bodyPost.is_link = 0;
//     } else {
//         bodyPost.is_link = 1;
//     }

//     //await httpRequest.post('https://api.teatv.net/api/v2/mns', {}, bodyPost);

//     return source.state.hosts;
// }

// thisSource.testing = Seriesfree;


var URL = {
    DOMAIN: "https://seriesfree.to/",
    SEARCH: function SEARCH(title) {
        return 'https://seriesfree.to/search/' + title;
    },
    DOMAIN_DECODE: '',
    HEADERS: function HEADERS(referer) {
        return {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
            'referer': referer
        };
    }
};

var Seriesfree = function () {
    function Seriesfree(props) {
        _classCallCheck(this, Seriesfree);

        this.libs = props.libs;
        this.movieInfo = props.movieInfo;
        this.settings = props.settings;
        this.state = {};
    }

    _createClass(Seriesfree, [{
        key: 'searchDetail',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _libs, httpRequest, cheerio, stringHelper, _movieInfo, title, year, season, episode, type, movieflixter, detailUrl, videoUrl, tvshowVideoUrl, urlSearch, dataSearch, $, itemSearch, titleVal, linkDetailVal, searchLink, $_2, totalLinks;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _libs = this.libs, httpRequest = _libs.httpRequest, cheerio = _libs.cheerio, stringHelper = _libs.stringHelper;
                                _movieInfo = this.movieInfo, title = _movieInfo.title, year = _movieInfo.year, season = _movieInfo.season, episode = _movieInfo.episode, type = _movieInfo.type;
                                movieflixter = this;
                                detailUrl = false;
                                videoUrl = false;
                                tvshowVideoUrl = false;
                                _context.prev = 6;
                                urlSearch = URL.SEARCH(title);
                                _context.next = 10;
                                return httpRequest.getHTML(urlSearch);

                            case 10:
                                dataSearch = _context.sent;
                                $ = cheerio.load(dataSearch);
                                itemSearch = $('.container .cf .separate:nth-child(4)');
                                titleVal = itemSearch.find('h2').text();
                                linkDetailVal = 'https://seriesfree.to' + itemSearch.find('a').attr('href');


                                if (titleVal.toLowerCase().search(title.toLowerCase()) !== -1) {
                                    detailUrl = linkDetailVal;
                                }

                                if (!detailUrl) {
                                    _context.next = 23;
                                    break;
                                }

                                _context.next = 19;
                                return httpRequest.getHTML(detailUrl);

                            case 19:
                                searchLink = _context.sent;
                                $_2 = cheerio.load(searchLink);
                                totalLinks = $_2('.seasons-grid a');

                                totalLinks.each(function () {
                                    var checkCondition = $(this).attr('href');
                                    if (checkCondition.indexOf('s' + season + '_e' + episode) !== -1) {
                                        detailUrl = 'https://seriesfree.to' + checkCondition;
                                    }
                                });

                            case 23:
                                this.state.detailUrl = detailUrl;
                                _context.next = 29;
                                break;

                            case 26:
                                _context.prev = 26;
                                _context.t0 = _context['catch'](6);

                                console.log(String(_context.t0));

                            case 29:
                                return _context.abrupt('return');

                            case 30:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[6, 26]]);
            }));

            function searchDetail() {
                return _ref.apply(this, arguments);
            }

            return searchDetail;
        }()
    }, {
        key: 'getHostFromDetail',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this = this;

                var _libs2, httpRequest, cheerio, qs, _movieInfo2, title, year, season, episode, type, hosts, detailUrl, htmlDetail, $, servers, sources, sourcesPromise;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _libs2 = this.libs, httpRequest = _libs2.httpRequest, cheerio = _libs2.cheerio, qs = _libs2.qs;
                                _movieInfo2 = this.movieInfo, title = _movieInfo2.title, year = _movieInfo2.year, season = _movieInfo2.season, episode = _movieInfo2.episode, type = _movieInfo2.type;

                                if (this.state.detailUrl) {
                                    _context3.next = 4;
                                    break;
                                }

                                throw new Error("NOT_FOUND");

                            case 4:
                                hosts = [];
                                detailUrl = this.state.detailUrl;
                                _context3.next = 8;
                                return httpRequest.getHTML(this.state.detailUrl);

                            case 8:
                                htmlDetail = _context3.sent;
                                $ = cheerio.load(htmlDetail);
                                servers = $(".tabs .links tr");
                                sources = [];

                                servers.each(function () {
                                    var hostName = $(this).find('td:nth-child(1)').text();
                                    var onclick = "";
                                    if ((hostName.indexOf("openload") !== -1 || hostName.indexOf("streamango") !== -1) && sources.length < 10) {
                                        onclick = 'https://seriesfree.to' + $(this).find('td:nth-child(2) a').attr('href');
                                        console.log(onclick);
                                        sources.push(onclick);
                                    }
                                });

                                console.log(sources.length);
                                sourcesPromise = sources.map(function () {
                                    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(link) {
                                        var originLink, $_1, linkDetail;
                                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                            while (1) {
                                                switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                        _context2.next = 2;
                                                        return httpRequest.getHTML(link);

                                                    case 2:
                                                        originLink = _context2.sent;
                                                        $_1 = cheerio.load(originLink);
                                                        linkDetail = $_1('#app .serie-details div:nth-child(2) a').attr('href');

                                                        if (linkDetail) {
                                                            if (hosts.length < 10) {
                                                                hosts.push({
                                                                    provider: {
                                                                        url: detailUrl,
                                                                        name: "seriesfree"
                                                                    },
                                                                    result: {
                                                                        file: linkDetail,
                                                                        label: "embed",
                                                                        type: "embed"
                                                                    }
                                                                });
                                                            }
                                                        }

                                                    case 6:
                                                    case 'end':
                                                        return _context2.stop();
                                                }
                                            }
                                        }, _callee2, _this);
                                    }));

                                    return function (_x) {
                                        return _ref3.apply(this, arguments);
                                    };
                                }());
                                _context3.next = 17;
                                return Promise.all(sourcesPromise);

                            case 17:
                                this.state.hosts = hosts;

                            case 18:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getHostFromDetail() {
                return _ref2.apply(this, arguments);
            }

            return getHostFromDetail;
        }()
    }]);

    return Seriesfree;
}();

exports.default = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(libs, movieInfo, settings) {
        var httpRequest, source, bodyPost, res, js, hosts;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        httpRequest = libs.httpRequest;
                        source = new Seriesfree({
                            libs: libs,
                            movieInfo: movieInfo,
                            settings: settings
                        });
                        bodyPost = {
                            name_source: 'seriesfree',
                            is_link: 0,
                            type: movieInfo.type,
                            season: movieInfo.season,
                            episode: movieInfo.episode,
                            title: movieInfo.title,
                            year: movieInfo.year
                        };
                        _context4.next = 5;
                        return httpRequest.post('https://vvv.teatv.net/source/get', {}, bodyPost);

                    case 5:
                        res = _context4.sent;
                        js = void 0, hosts = [];


                        try {
                            res = res['data'];
                            if (res['status']) {
                                hosts = JSON.parse(res['hosts']);
                            }
                        } catch (err) {
                            console.log('err', err);
                        }

                        if (!(hosts.length == 0)) {
                            _context4.next = 19;
                            break;
                        }

                        _context4.next = 11;
                        return source.searchDetail();

                    case 11:
                        _context4.next = 13;
                        return source.getHostFromDetail();

                    case 13:
                        hosts = source.state.hosts;

                        if (!(hosts.length > 0)) {
                            _context4.next = 19;
                            break;
                        }

                        bodyPost['hosts'] = JSON.stringify(hosts);
                        bodyPost['expired'] = 3600;
                        _context4.next = 19;
                        return httpRequest.post('https://vvv.teatv.net/source/set', {}, bodyPost);

                    case 19:

                        if (movieInfo.ss != undefined) {
                            movieInfo.ss.to(movieInfo.cs.id).emit(movieInfo.c, hosts);
                        }

                        return _context4.abrupt('return', hosts);

                    case 21:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function (_x2, _x3, _x4) {
        return _ref4.apply(this, arguments);
    };
}();

exports.testing = Seriesfree;