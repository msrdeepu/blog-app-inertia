<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('createblogs', function (Blueprint $table) {
            $table->id();
            $table->text('posttitle');
            $table->string('author');
            $table->date('date')->nullable();
            $table->string('status')->nullable();
            $table->text('blogcontent')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('createblogs');
    }
};
