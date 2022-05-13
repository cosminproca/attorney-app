<?php

namespace App\Enums;

enum Role: string
{
    case User = 'User';
    case Attorney = 'Attorney';
    case Admin = 'Admin';
}
