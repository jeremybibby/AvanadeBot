"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var gcc_alerts = [
            {
                id: 11,
                severity: 1,
                component: 'PC',
                description: 'Test Description 1'
            },
            {
                id: 12,
                severity: 2,
                component: 'Mobile',
                description: 'Test Description 2'
            },
            {
                id: 13,
                severity: 2,
                component: 'Server',
                description: 'Test Description 3'
            },
            {
                id: 14,
                severity: 3,
                component: 'Network',
                description: 'Test Description 4'
            },
            {
                id: 15,
                severity: 4,
                component: 'Phone',
                description: 'Test Description 5'
            }
        ];
        return { gcc_alerts: gcc_alerts };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map