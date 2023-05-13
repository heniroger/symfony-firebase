<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    public function index(): Response
    {

        /**
         * @Route(name = 'index', path='/')
         */

        return $this->render('index.html.twig', []);

    }
}
