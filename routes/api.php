<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\PresetController;

// Test route
Route::get('/test', function () {
    return response()->json(['message' => 'API is working!']);
});

// Device routes
Route::get('/devices', [DeviceController::class, 'index']);
Route::post('/devices', [DeviceController::class, 'store']);

// Preset routes
Route::get('/presets', [PresetController::class, 'index']);
Route::post('/presets', [PresetController::class, 'store']);
Route::get('/presets/{id}', [PresetController::class, 'show']);
