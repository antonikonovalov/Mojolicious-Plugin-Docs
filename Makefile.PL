use strict;
use warnings;

use ExtUtils::MakeMaker;

WriteMakefile(
  NAME         => 'Mojolicious::Plugin::Docs',
  VERSION_FROM => 'lib/Mojolicious/Plugin/Docs.pm',
  AUTHOR       => 'Anton Konovalov <nospam@cpan.org>',
  PREREQ_PM    => {'Mojolicious' => '4.16'},
  test         => {TESTS => 't/*.t'}
);
