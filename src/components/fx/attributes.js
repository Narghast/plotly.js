/**
* Copyright 2012-2017, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var extendFlat = require('../../lib/extend').extendFlat;
var fontAttrs = require('../../plots/font_attributes');

module.exports = {
    hoverlabel: {
        bgcolor: {
            valType: 'color',
            role: 'style',
            arrayOk: true,
            description: [
                'Sets the background color of the hover labels for this trace'
            ].join(' ')
        },
        bordercolor: {
            valType: 'color',
            role: 'style',
            arrayOk: true,
            description: [
                'Sets the border color of the hover labels for this trace.'
            ].join(' ')
        },
        font: {
            family: extendFlat({}, fontAttrs.family, { arrayOk: true }),
            size: extendFlat({}, fontAttrs.size, { arrayOk: true }),
            color: extendFlat({}, fontAttrs.color, { arrayOk: true })
        },
        namelength: {
            valType: 'integer',
            min: -1,
            arrayOk: true,
            role: 'style',
            description: [
                'Sets the length (in number of characters) of the trace name in',
                'the hover labels for this trace. -1 shows the whole name',
                'regardless of length. 0-3 shows the first 0-3 characters, and',
                'an integer >3 will show the whole name if it is less than that',
                'many characters, but if it is longer, will truncate to',
                '`namelength - 3` characters and add an ellipsis.'
            ].join(' ')
        }
    }
};
