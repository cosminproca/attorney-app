<?php

namespace App\Actions\Auth;

use App\Models\User;
use Lorisleiva\Actions\Concerns\AsAction;

class AttachRoleToUser
{
    use AsAction;

    /**
     * Attach role to a registered user
     *
     * @param  \App\Models\User  $user
     * @param  string  $role
     * @return \App\Models\User
     */
    public function handle(User $user, string $role): User
    {
        $role = config('roles.models.role')::where('name', '=', $role)->first();
        $user->attachRole($role);

        return $user;
    }
}
