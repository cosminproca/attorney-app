<?php

namespace App\Enums;

enum Role: string
{
    case User = 'User';
    case Team = 'Team';
    case Admin = 'Admin';
}
