<?php

use function Pest\Laravel\get;

test('example feature', function () {
    get('/')->assertStatus(200);
});
