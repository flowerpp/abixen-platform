/**
 * Copyright (c) 2010-present Abixen Systems. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

(function () {
    'use strict';

    angular
        .module('platformDashboardModule')
        .provider('dashboardData', dashboardData);

    function dashboardData() {

        var modules = {};
        var layouts = {};
        var moduleId = 0;

        function addModule(module) {
            modules[module.moduleType.name] = module;
            return this;
        }

        function getModules() {
            return modules;
        }

        function addLayout(name, layout) {
            layouts[name] = layout;
            return this;
        }

        function getLayouts() {
            return layouts;
        }

        this.$get = function () {
            return {
                modules: modules,
                getLayouts: getLayouts,
                addLayout: addLayout,
                getModules: getModules,
                addModule: addModule,

                id: function () {
                    return ++moduleId;
                }
            };
        };
    }
})();